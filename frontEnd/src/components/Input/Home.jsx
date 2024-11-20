import React, { useState, useEffect } from "react";
import axios from "axios";


function Home() {
    const [home, setHome] = useState({ greeting: "", title: "" });
  const handleHomeChange = (e) => {
    const { name, value } = e.target;
    setHome((prev) => ({ ...prev, [name]: value }));
  };


  const onHandleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:9000',home).then((result)=>{
      console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
    
  }
  return (
    <div className="py-4 w-full mx-auto">
    <h1 className="font-bold text-center p-3">Home</h1>
    <form className="flex flex-col" onSubmit={onHandleSubmit}>
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

  )
}

export default Home