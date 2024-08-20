import express from "express";
import http from "http";
import { Server } from 'socket.io';
import { newuser } from "./routes/loginpage/loginAndsignup.js";
import { auth } from "./routes/loginpage/login.js";
import { users } from "./routes/provideuserinfo/userinfo.js";
import { corsMiddleware } from "./Middleware/handelcors.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",  
        methods: ["GET", "POST"]
    }
});

app.use(corsMiddleware);
app.options('*', corsMiddleware);

app.use(express.json());

app.use("/", newuser);
app.use("/", auth);
app.use("/", users);

const PORT = 8080;

io.on('connection', (socket) => {
    console.log("New user connected");

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);  
    });

   
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
