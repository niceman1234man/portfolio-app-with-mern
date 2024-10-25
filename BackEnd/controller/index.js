import mongoose from "mongoose";
import Models from "../models/index.js"; // Adjust the path as necessary

const { Home, About, Skill, Service } = Models; // Destructure the models

export const postHome = async (req, res) => {
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

export const postAbout = async (req, res) => {
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

export const postSkill = async (req, res) => {
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

export const postService = async (req, res) => {
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



export const getAbout=async(req,res)=>{
  try {
   const result= await About.find({});
   res.status(200).json({success:true,data:result});

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Server Failer",error});
    
  }



}


export const getHome=async(req,res)=>{
  try {
    const result= await Home.find({});
    res.status(200).json({success:true,data:result});

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Server failer"});
    
  }
}

export const getSkill=async(req,res)=>{
  try {
    const result=await Skill.find({});
    res.status(200).json({success:true,data:result});
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,mesage:"Server Failer"});
  }
}

export const getService=async(req,res)=>{
  try {
    const result=await Service.find({});
    res.status(200).json({success:true,data:result});
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Server Failer"});
  }
 
}


export const updateAbout=async(req,res)=>{
  const id=req.params;
  updatedAbout=req.body;
  try {
   const result= await About.findByIdAndUpdate(id,updatedAbout,{new:true});
    res.status(200).json({success:true,data:result});

  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,mesage:"Server Failer"});
  }
}

export const updateHome=async(req,res)=>{
  const id=req.params;
  const updatedHome=req.body;
  try {
    const result=Home.findByIdAndUpdate(id,updatedHome,{new:true});
    res.status(200).json({success:true,data:result});
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Server Failer"});
    
  }
}

export const updateSkill=async(req,res)=>{
  const id=req.params;
const  updatedSkill=req.body;
  try {
    const result=Skill.findByIdAndUpdate(id,updatedSkill,{new:true});
    res.status(200).json({success:true,data:result});
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Server Failer"});
  }
}

export const updateService=async(req,res)=>{
  const id=req.params;
  const updatedService=req.body;
  try {
    const result= Service.findByIdAndUpdate(id,updatedService,{new:true});
    res.status(200).json({success:true,data:result});
  } catch (error) {
    console.log(error);
    res.status(500).json({success:true,message:"Server Failer"});
  }
}

export const deleteSkill =async(req,res)=>{
  const id=req.params;
  try {
    await Skill.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"Skill deleted successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({success:true,message:"Server failer"});
  }
}

export const deleteService=async(req,res)=>{
  const id=req.params;
  try {
    await Service.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"Service deleted successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:"Server Failer"});
  }
}