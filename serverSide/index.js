import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import user from "./Routes/Authentication/user.js";

const app = express();

// Middleware setup
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Allow cross-origin requests from the specified origin
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use("/user", user); // Route handling for user authentication and management

const PORT = 3001;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/authentication");

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
