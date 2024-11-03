import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Information() {
  const [home, setHome] = useState({ greeting: "", title: "" });
  const [about, setAbout] = useState({ photo: "", description: "" });
  const [skill, setSkill] = useState({ photo: "", name: "" });
  const [service, setService] = useState({ name: "", desc: "" });
  const { id } = useParams();

  const submitSkill = (e) => {
    e.preventDefault();
  
    // Create a new FormData instance
    const formData = new FormData();
    
    // Append the file and other data to the formData
    formData.append('photo', skill.photo); // Assuming skill.photo is a File object
    formData.append('name', skill.name); // Assuming skill.name is a string
  
    axios
      .post("http://localhost:9000/home/s", formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the proper content type
        }
      })
      .then((result) => {
        console.log(result);
        alert("Skill added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submitService = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/home/serv", service)
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
    if (name === "photo") {
      setSkill((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setSkill((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAboutChange = (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      setAbout((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setAbout((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleHomeChange = (e) => {
    const { name, value } = e.target;
    setHome((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-[1240px] h-screen mx-auto">
      <div className="py-4 w-full mx-auto">
        <h1 className="font-bold text-center p-3">Home</h1>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Greeting: Hello !!"
            className="p-2 border border-black my-2"
            name="greeting"
            value={home.greeting}
            onChange={handleHomeChange} // Ensure this is uncommented
          />
          <input
            type="text"
            placeholder="Title: e.g., Full Stack Developer..."
            className="p-2 border border-black my-2"
            name="title"
            value={home.title}
            onChange={handleHomeChange} // Ensure this is uncommented
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Update
          </button>
        </form>
      </div>

      <div className="py-4 w-full">
        <h1 className="font-bold text-center p-3">About Me</h1>
        <form className="flex flex-col">
          <input
            type="file"
            name="photo"
            className="p-2 border border-black my-2"
            onChange={handleAboutChange} // Ensure this is uncommented
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
          <label htmlFor="photo" className="my-2">Upload Photo:</label>
          <input
            type="file"
            name="photo"
            className="p-2 border border-black"
            onChange={handleSkillChange}
          />
          <label htmlFor="name" className="my-2">Skill's Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 border border-black my-2"
            placeholder="Skill's Name"
            value={skill.name}
            onChange={handleSkillChange}
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600 hover:bg-cyan-700 transition">
            Save
          </button>
        </form>
      </div>
      <div className="py-4 w-full">
        <h1 className="font-bold text-center p-3">Services</h1>
        <form className="flex flex-col" onSubmit={submitService}>
          <label htmlFor="photo" className="my-2">Service Name</label>
          <input
            type="text"
            name="name"
            className="p-2 border border-black"
            value={service.name}
            onChange={handleServiceChange}
          />
          <label htmlFor="name" className="my-2">Service Description</label>
          <input
            type="text"
            name="desc"
            id="name"
            className="p-2 border border-black my-2"
            placeholder="Skill's Name"
            value={service.desc}
            onChange={handleServiceChange}
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600 hover:bg-cyan-700 transition">
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