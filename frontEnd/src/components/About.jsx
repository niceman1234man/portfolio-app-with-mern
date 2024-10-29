import React, { useState, useEffect } from 'react';
import me2 from '../assets/me2.jpg';
import axios from 'axios';

function About() {
  const [about, setAbout] = useState({ photo: me2, description: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/home');
        // Assuming response.data contains the expected structure
        setAbout(response.data);
        console.log("API result: ", response.data);
      } catch (error) {
        console.error("Server fetching error:", error);
        setError('Failed to load about information.');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
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
          <div className='text-black p-2'>
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
