const express = require("express");
const userRouter = express.Router();
const db = require("../models/index");

// Now you can access the Sequelize instance and models
const sequelize = db.sequelize;
const User = db.User;
// const QuestionSet = db.QuestionSet;

// Create a new User 
userRouter.post("/createUser", async (req, res) => {
  try {

    const {
        name,
    
    } = req.body;

    // Create a new user
    const poll = await User.create({
        name
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});





module.exports = userRouter;
