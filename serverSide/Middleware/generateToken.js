import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.Access_Token_Secret;


function generateAccessToken(user) {
  return jwt.sign({ username: user.username }, secret, { expiresIn: "10m" });
}

export default generateAccessToken;
