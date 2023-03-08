const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Message = require("../models/messageModel");

const linkUsers = asyncHandler(async (req,res,next)=>{
    try{
        const user = await User.findById(req.user._id)
        const {otherUserName} = req.body
        const otherUser = await User.findOne({userName:otherUserName})
        if (user && otherUser){
            const checkLinked = await Message.findOne({
                ownersId: {
                    $all: [user, otherUser]
                }
            });
            if(!checkLinked){
                const texting = await Message.create({
                    ownersId: [user, otherUser]
                })
                if (texting){
                    const sending1 = await User.findByIdAndUpdate(
                        {_id:user._id},
                        {$push: {messagingUsers: otherUser.userName}},
                        {new: true},
                    );
                    const sending2 = await User.findByIdAndUpdate(
                        {_id:otherUser._id},
                        {$push: {messagingUsers: user.userName}},
                        {new: true},
                    );
                    if (sending1&&sending2){
                        const {_id} = texting
                        req.messagingId = _id;
                        next();
                    }else {
                        res.status(401)
                        throw new Error("An error occurred during operation!")
                    }
                }else {
                    res.status(401)
                    throw new Error("An error occurred during operation!")
                }
            }else{
                const {_id} = checkLinked;
                req.messagingId = _id;
                next();
            }
        }else{
            res.status(401)
            throw new Error("Users not found!")
        }
    }catch (error){
        res.status(401);
        throw new Error("You made an unauthorized request")
    }

})

module.exports = linkUsers