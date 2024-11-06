import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
    },
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {

	return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId
    console.log("Received userId:", userId);

    if (userId && userId !== "undefined") {
        userSocketMap[userId] = socket.id;
        console.log("Added to userSocketMap:", userSocketMap);
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        if (userId) {
            delete userSocketMap[userId];
            console.log("Removed from userSocketMap:", userSocketMap);
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        }
    });
});

export { app, io, server };
