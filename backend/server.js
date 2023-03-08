const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const messageRoute = require("./routes/messageRoute")
const errorHandler = require("./middleWares/errorMiddleware")
const cookieParser = require("cookie-parser")
const app = express();



// socket
const http = require("http");

const SOCKET_PORT = 4000;
const server = http.createServer(app);
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000',credentials:true}});


io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("messages",data=>{
        const {from,to,messages} = data
        console.log(data)
        socket.broadcast.emit(to,{from:from,messages:messages});
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});




server.listen(SOCKET_PORT, () => console.log(`SOCKET listening on port ${SOCKET_PORT}`));



// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

// Routes Middleware
app.use("/api/users",userRoute)
app.use("/api/message",messageRoute)

// Routes
app.get("/",(req,res)=>{
    res.send("instagram backend")
})

// Error Middleware
app.use(errorHandler);


// connect to DB
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, (()=> {
            console.log(`Server running on port: ${PORT}`)
        }))
    })
    .catch((err)=>console.log(err))

