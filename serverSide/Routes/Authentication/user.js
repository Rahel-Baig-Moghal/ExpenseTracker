import express from "express";
import authenticateToken from "../../Middleware/authenticateToken.js";
import bcrypt from "bcrypt";
import generateAccessToken from "../../Middleware/generateToken.js";
import userModel from "../../models/users.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const refreshSecret = process.env.Refresh_Token_Secret;

let router = express.Router();

// Sign-in route
router.post("/signin", async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (user === null) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const refreshToken = jwt.sign(req.body.username, refreshSecret);
      const userData = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        refreshtoken: refreshToken,
      };
      userModel
        .create(userData)
        .then(() =>
          res.json({
            status: 200,
          })
        )
        .catch((err) => res.json(err));
    } else {
      res.json({
        status: 400,
      });
    }
  } catch (error) {
    res.status(500).send();
    console.log(error);
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (user === null) {
      return res.json({
        status: 400,
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      const accessToken = generateAccessToken(user);
      res.cookie("accesstoken", accessToken, { maxAge: 600000 }); // Set access token cookie with a 1-minute expiration
      res.cookie("username", user.username);
      res.json({
        status: 200,
        message: "Login successful",
      });
    } else {
      res.send("Not Allowed");
    }
  } catch (error) {
    res.status(500).send();
    console.log(error);
  }
});

// Protected data route
router.get("/data", authenticateToken, async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.cookies.username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.json({ username: user.username });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});

// Logout route
router.post("/logout", async (req, res) => {
  try {
    if (!req.body || !req.body.username) {
      return res.status(400).send("Invalid user data");
    }

    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const refreshToken = jwt.sign(
      { username: req.body.username },
      refreshSecret
    );

    let myquery = { refreshtoken: user.refreshtoken };
    let newvalues = { $set: { refreshtoken: refreshToken } };

    const result = await userModel.updateOne(myquery, newvalues);

    if (result.nModified === 0) {
      return res.status(400).send("Failed to update the refresh token");
    }

    return res.status(200).json({ status: 200, message: "Logout success" });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});

export default router;
