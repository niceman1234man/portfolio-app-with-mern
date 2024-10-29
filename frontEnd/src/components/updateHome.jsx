import React,{useState,useEffect} from 'react'
import axios from 'axios';

function updateHome() {


    useEffect(() => {
        axios.get("http://localhost:9000/home")
          .then((result) => {
            setHome(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
          .put('http://localhost:9000/home', home)
          .then((result) => {
            console.log(result);
            alert("Home updated successfully");
          })
          .catch((error) => {
            console.error(error);
            alert("Error adding home");
          });
      };
    
      
  const handleHomeChange = (e) => {
    const { name, value } = e.target;
    setHome((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-[1240px] h-screen mx-auto">
      <div className="py-4 w-full mx-auto">
        <h1 className="font-bold text-center p-3">Home</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Greeting: Hello !!"
            className="p-2 border border-black my-2"
            name="greeting"
            value={home.greeting}
            onChange={handleHomeChange}
          />
          <input
            type="text"
            placeholder="Title: e.g., Full Stack Developer..."
            className="p-2 border border-black my-2"
            value={home.title}
            name="title"
            onChange={handleHomeChange}
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Update
          </button>
        </form>
      </div>
      </div>
  )
}

export default updateHome;