import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Information() {
  const [home, setHome] = useState({ greeting: "", title: "" });
  const [about, setAbout] = useState({ photo: "", description: "" });
  const [skill, setSkill] = useState({ skillName: "", pic: "" });
  const [service, setService] = useState({ serviceName: "", desc: "" });
  const { id } = useParams();

 
 

  
   



  

  const submitSkill = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/home/s", skill)
      .then((result) => {
        console.log(skill);
        alert("Skill added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitService = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/services", service)
      .then((result) => {
        console.log(result);
        alert("New Service added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };




  const handleSkillChange = (e) => {
    const { name, value } = e.target;
    if (name === "pic") {
      setSkill((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setSkill((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAboutChange = (e) => {
    const { name, value } = e.target;
    if (name === "pic") {
      setSkill((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setSkill((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-[1240px] h-screen mx-auto">
      <div className="py-4 w-full mx-auto">
        <h1 className="font-bold text-center p-3">Home</h1>
        <form className="flex flex-col" >
          <input
            type="text"
            placeholder="Greeting: Hello !!"
            className="p-2 border border-black my-2"
            name="greeting"
            value={home.greeting}
            // onChange={handleHomeChange}
          />
          <input
            type="text"
            placeholder="Title: e.g., Full Stack Developer..."
            className="p-2 border border-black my-2"
            value={home.title}
            name="title"
            // onChange={handleHomeChange}
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Update
          </button>
        </form>
      </div>

      <div className="py-4 w-full">
        <h1 className="font-bold text-center p-3">About Me</h1>
        <form className="flex flex-col" >
          <input
            type="file"
            name="photo"
            className="p-2 border border-black my-2"
            value={about.photo}
            // onChange={handleAboutChange}
          />
          <textarea
            placeholder="Description about Me"
            name="description"
            className="p-2 border border-black my-2"
            value={about.description}
            onChange={handleAboutChange}
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Save
          </button>
        </form>
      </div>

      <div className="py-4 w-full">
        <h1 className="font-bold text-center p-3">Skills</h1>
        <form className="flex flex-col" onSubmit={submitSkill}>
          <input
            type="text"
            placeholder="Skill's Name"
            name="skillName"
            className="p-2 border border-black my-2"
            onChange={handleSkillChange}
          />
          <input
            type="file"
            name="pic"
            className="p-2 border border-black my-2"
            onChange={handleSkillChange}
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Save
          </button>
        </form>
      </div>

      <div className="py-4 w-full">
        <h1 className="font-bold text-center p-3">Services</h1>
        <form className="flex flex-col" onSubmit={submitService}>
          <input
            type="text"
            placeholder="Service Name"
            name="serviceName"
            className="p-2 border border-black my-2"
            onChange={handleServiceChange}
          />
          <textarea
            placeholder="Description"
            name="desc"
            className="p-2 border border-black my-2"
            onChange={handleServiceChange}
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Save
          </button>
        </form>
      </div>

      <div className="py-4 w-full">
        <h1 className="font-bold text-center p-3">Contacts</h1>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Greeting"
            className="p-2 border border-black my-2"
          />
          <input
            type="text"
            placeholder="Title"
            className="p-2 border border-black my-2"
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Information;