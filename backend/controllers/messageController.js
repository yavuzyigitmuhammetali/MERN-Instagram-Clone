const asyncHandler = require("express-async-handler")
const Message = require("../models/messageModel")
const User = require("../models/userModel")


const sendMessage = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id)
    const {text} = req.body;
    if (user){
        const sending = await Message.findByIdAndUpdate(
            {_id:req.messagingId},
            {$push: {messages: {senderId: user, text: text}}},
            {new: true},
        );
        if (sending){
            res.status(201.).json({message:text})
        }else{
            res.status(400)
            throw new Error("An error occurred while sending the message")
        }
    }else {
        res.status(400)
        throw new Error("User not found!")
    }
})

const getMessagesById = asyncHandler(async (req,res)=>{
    const messaging = await Message.findOne(req.messagingId)
    if(messaging){
        const {messages} = messaging
        res.status(200).json({
            messages
        })
    }else{
        res.status(400)
        throw new Error("An error occurred while connecting to the server")
    }
})


module.exports={
    sendMessage,
    getMessagesById,
}