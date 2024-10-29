import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Skils() {
  const [skills, setSkills] = useState({}); // Initialize as an object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9000/home')
      .then((result) => {
        setSkills(result.data); // Assume result.data is an object
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError('Failed to load skills');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  // Convert the skills object to an array
  const skillsArray = Object.values(skills);

  return (
    <div className='py-16 bg-black'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-center font-bold text-2xl py-6 my-4'>My Skills</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {skillsArray.map((skill) => ( // Map over the converted array
            <div key={skill._id} className='flex flex-col items-center'>
              <div className='bg-white p-4 rounded-full w-[100px] md:w-[120px]'>
                <img src={skill.pic} alt={skill.name} className='p-4' />
              </div>
              <p className='my-3 bg-orange-500 w-32 text-center p-2 rounded-full font-bold'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skils;
