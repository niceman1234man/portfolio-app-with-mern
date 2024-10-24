import mongoose from "mongoose";
import Models from "../models/index.js"; // Adjust the path as necessary

const { Home, About, Skill, Service } = Models; // Destructure the models

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

export const getAbout = async (req, res) => {
  const about = req.body;
  const newAbout = new About(about);
  try {
    await new newAbout.save();
    res
      .status(201)
      .json({ success: true, message: "About added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
    console.log(error);
  }
};

export const getSkill = async (req, res) => {
  const skill = req.body;
  const newSkill = new Skill(skill);
  try {
    await newSkill.save();
    res
      .status(201)
      .json({ success: true, message: "new Skill added succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const getService = async (req, res) => {
  const service = req.body;
  const newService = new Service(service);
  try {
    await newService.save();
    res
      .status(201)
      .json({ success: true, message: "new service added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "server error" });
  }
};
