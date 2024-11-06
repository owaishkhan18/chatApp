import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/GetUsers.js";

import connectMogoDb from "./db/connectoMongoDb.js";

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

const port = process.env.PORT || 4000;

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGODB_URL_SRC, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
