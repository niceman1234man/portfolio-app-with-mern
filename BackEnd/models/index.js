import mongoose from "mongoose";
const home = new mongoose.Schema(
  {
    greeting: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  { timestamps: true }
);
const Home = mongoose.model("Home", home);

const about = new mongoose.Schema(
  {
    photo: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const About = mongoose.model("About", about);

const skills = new mongoose.Schema(
  {
    photo: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skills);

const sevice = mongoose.Schema(
  {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", sevice);

export default { Home, About, Skill, Service };
