import dotenv from "dotenv";
import generateAccessToken from "./generateToken.js";
import jwt from "jsonwebtoken";
import userModel from "../models/users.js";

dotenv.config();

const refreshSecret = process.env.Refresh_Token_Secret;

async function renewAccessToken(req, res) {
  try {
    const username = req.cookies.username;

    if (!username) {
      res
        .status(400)
        .json({ status: 400, message: "Username not found in cookies" });
      return null;
    }

    const user = await userModel.findOne({ username });
    if (!user) {
      res.status(400).json({ status: 400, message: "User not found" });
      return null;
    }

    const refreshToken = user.refreshtoken;
    return new Promise((resolve, reject) => {
      jwt.verify(refreshToken, refreshSecret, (err) => {
        if (err) {
          console.error("Refresh token verification error:", err);
          res.sendStatus(403);
          return resolve(null);
        }

        const accessToken = generateAccessToken({ username: user.username });
        res.cookie("accesstoken", accessToken, { httpOnly: true });
        resolve(accessToken);
      });
    });
  } catch (error) {
    console.error("Error:", error);
    res.sendStatus(500);
    return null;
  }
}

export default renewAccessToken;
