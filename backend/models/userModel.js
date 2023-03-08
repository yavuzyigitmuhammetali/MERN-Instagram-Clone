const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "The value \"name\" must be entered"],
        },
        userName:{
            type: String,
            unique: true,
            required: [true, "The value \"userName\" must be entered"],
        },
        email: {
            type: String,
            required: [true, "The value \"email\" must be entered"],
            unique: true,
            trim: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please enter a valid e-mail",
            ],
        },
        password: {
            type: String,
            required: [true, "The value \"password\" must be entered"],
            minLength: [6, "Your password must be at least 6 characters"],
        },
        gender:{
            type: String,
            enum: ['male', 'female'],
            required: [true, "The value \"gender\" must be entered"],
        },
        privateAccount:{
            type: Boolean,
            required: [true, "The value \"privateAccount\" must be entered"],
            default: false,
        },
        ppLink: {
            type: String,
            required: [true, ""],
            default: "default_pp.png",
        },
        bio: {
            type: String,
            default: "",
            maxLength: [100, "Slow down, mate, you don't have that much space to write that much."],
        },
        followersId: {
            type: [String],
        },
        followingId: {
            type: [String],
        },
        messagingUsers: {
            type: [String],
            ref: 'User'
        },
        followingRequest: {
            type: [String],
        },
        // stories: {
        //     type: [String],
        // },

    },
    {
        timestamps: true,
    }
);


const User = mongoose.model('User', userSchema);
module.exports = User;