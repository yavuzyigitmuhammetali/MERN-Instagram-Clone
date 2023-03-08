const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
    {
        ownersId: [{type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, "User not found!"]
        }],
        messages: [{
            _id: false,
            senderId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            text: String,
            isRead: {
                type: Boolean,
                default: false
            }
        }]
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
