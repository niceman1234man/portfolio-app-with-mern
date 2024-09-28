import React from 'react';
import me2 from '../assets/me2.jpg';

function About() {
  return (
    <div className='bg-white py-16 h-screen'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='mx-4 grid md:grid-cols-2 gap-8'>
          <div className='w-[90%] p-4 flex items-center justify-center rounded-lg mx-auto'>
            <img 
              src={me2} 
              alt="Profile" 
              className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-8 border-fuchsia-950' 
            />
          </div>
          <div className='text-black p-2 '>
            <h2 className='text-[30px] p-2'>About Me</h2>
            <p className='text-xl font-semibold lg:text-xl'>
              Create stunning text effects with our font style text effect generator. 
              Choose from a variety of fonts and effortlessly transform your text 
              into a 3D masterpiece. Add texture and depth to your words, whether 
              you want to evoke the wildness of a leopard or the charm of a zoo 
              full of animals.
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