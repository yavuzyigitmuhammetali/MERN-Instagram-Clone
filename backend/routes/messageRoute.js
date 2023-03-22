const express = require("express");
const router = express.Router();
const {sendMessage, getMessagesById} = require("../controllers/messageController")
const protect = require("../middleWares/authMiddleware");
const linkUsers = require("../middleWares/messagingMiddleware")


router.post("/sendmessage",protect,linkUsers,sendMessage)
router.post("/getmessages",protect,linkUsers,getMessagesById)
router.post("/linkusers",protect,linkUsers)


module.exports = router