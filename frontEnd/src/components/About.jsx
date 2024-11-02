import React, { useState, useEffect } from 'react';
import me2 from '../assets/me2.jpg';
import axios from 'axios';

function About() {
  const [about, setAbout] = useState({ photo: me2, description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9000/home')
      .then((response) => {
        if (response.data.data && response.data.data.length > 0) {
          setAbout(response.data.data[0]); // Accessing the first object in the array
        } else {
          setError("No data available.");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("An error occurred while fetching data.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const handleResumeClick = () => {
    window.open('https://docs.google.com/document/d/1oaJCZY_P9t5TjCnrYuadG5bFn3quQYRhm1lyHMdzzGE/edit?tab=t.0', '_blank');
  };

  return (
    <div className='bg-white py-16 h-screen'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='mx-4 grid md:grid-cols-2 gap-8'>
          <div className='w-[90%] p-4 flex items-center justify-center rounded-lg mx-auto'>
            <img 
              src={about.photo || me2} 
              alt="Profile of the user" 
              className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-8 border-fuchsia-950' 
            />
          </div>
          <div className='text-black p-2'>
            <h2 className='text-[30px] p-2'>About Me</h2>
            <p className=' lg:text-md'>
              {about.description || "No description available."}
            </p>
            <div className='flex items-center justify-center mt-4'>
              <button 
                className='bg-[#00df9a] p-2 rounded-md w-[200px] text-medium font-semibold font-sans'
                onClick={handleResumeClick}
              >
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
