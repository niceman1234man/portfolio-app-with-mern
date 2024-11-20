import axios from 'axios';
import React,{useState} from 'react'

function About() {
    const [about, setAbout] = useState('');
    const [photo, setPhoto] = useState('');
      
    const handleSubmit = (e) => {
      e.preventDefault();
        const formData= new FormData();
        formData.append('image',photo);
        formData.append('description',about);
        try {
          axios.post('http://localhost:9000/home/s',formData).then((result)=>{
            console.log(result);
          })
        } catch (error) {
          console.log(error);
        }
      };
    
  return (
    <div className="py-4 w-full">
    <h1 className="font-bold text-center p-3">About Me</h1>
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="file"
        name="image"
        className="p-2 border border-black my-2"
        onChange={(e)=>{setPhoto(e.target.files[0])}} // Ensure this is uncommented
      />
      <textarea
        placeholder="Description about Me"
        name="description"
        className="p-2 border border-black my-2"
        value={about.description}
        onChange={(e)=>{setAbout(e.target.value)}}
      />
      <button type="submit" className="p-2 my-2 bg-cyan-600">
        Save
      </button>
    </form>
  </div>
  )
}

export default About