import mongoose from "mongoose";
import Models from '../models/index.js'; // Adjust the path as necessary

const { Home, About, Skill } = Models; // Destructure the models

export const getHome = async (req, res) => {
    const home = req.body;
    const newHome = new Home(home);
      
    try {
        await newHome.save();
        res.status(201).json({ success: true, message: "Added successfully" });
    } catch (error) {
        console.error("Error saving home:", error); // Log the error for debugging
        res.status(500).json({ success: false, message: "Server error" });
    }
};