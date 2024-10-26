import React ,{useState,useEffect} from 'react';
import me2 from '../assets/me2.jpg';
import axios from 'axios';


function About() {

  const [about, setAbout] = useState({ photo: me2, description: "I am a computer scientist currently specializing in full stack development, primarily using the MERN stack (MongoDB, Express.js, React, and Node.js). My focus is on web development, where I leverage my skills to create dynamic and responsive applications." });
  useEffect(()=>{
    const result=axios.get('http://localhost/9000').then(()=>{
      setAbout(result.data.data);
      console.log("API result : ",result);
    }).catch((error)=>{
      console.log("server fetching erroer",error);
    })


  },[])

  return (
    <div className='bg-white py-16 h-screen'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='mx-4 grid md:grid-cols-2 gap-8'>
          <div className='w-[90%] p-4 flex items-center justify-center rounded-lg mx-auto'>
            <img 
              src={about.photo} 
              alt="Profile" 
              className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-8 border-fuchsia-950' 
            />
          </div>
          <div className='text-black p-2 '>
            <h2 className='text-[30px] p-2'>About Me</h2>
            <p className='text-xl font-semibold lg:text-xl'>
             {about.description}
            </p>
            <div className='flex items-center justify-center mt-4'>
              <button className='bg-[#00df9a] p-2 rounded-md w-[200px] text-medium font-semibold font-sans'>
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;