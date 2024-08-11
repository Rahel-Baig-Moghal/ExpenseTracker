import dotenv from "dotenv";
import renewAccessToken from "./renewAccessToken.js";
import jwt from "jsonwebtoken";

dotenv.config();

const secret = process.env.Access_Token_Secret;

async function authenticateToken(req, res, next) {
  let accesstoken = req.cookies.accesstoken;

  // If no access token, try to renew it
  if (!accesstoken) {
    accesstoken = await renewAccessToken(req, res);
    if (!accesstoken) return;
  }

  // Verify the access token
  jwt.verify(accesstoken, secret, async (err, user) => {
    if (err) {
      console.error("Token verification error:", err);
      // If verification fails, try renewing the token
      accesstoken = await renewAccessToken(req, res);
      if (!accesstoken) return res.sendStatus(403);

      jwt.verify(accesstoken, secret, (err, user) => {
        if (err) {
          console.error("Re-verification error after renewal:", err);
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      req.user = user;
      next();
    }
  });
}

export default authenticateToken;
