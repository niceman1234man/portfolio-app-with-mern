import React,{useState } from 'react'
import axios from 'axios';

function Service() {
    const [service, setService] = useState({ name: "", desc: "" });
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
      const handleServiceChange = (e) => {
        const { name, value } = e.target;
        setService((prev) => ({ ...prev, [name]: value }));
      };
  return (
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

  )
}

export default Service