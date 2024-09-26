import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import header from '../assets/header.png';


function Navbar() {
  const  [nav,setNav]=useState(false);
  const HandleNav=()=>{
    setNav(!nav);
  }

  return (
    <div 
      className="md:h-24 w-full bg-fixed bg-cover h-[250px]" 
      style={{ backgroundImage: `url(${header})` }}
    >
      <div className="max-w-[1240px] mx-auto h-full">
        <div className="flex justify-between items-center h-full px-4">
          <div className="mr-10 text-white font-serif">
            YIHUNIE
          </div>
          <div className="font-bold text-white flex flex-col justify-center items-center">
            <ul className={`md:flex sm:w-[30%] ${nav? 'block' : 'hidden'} space-x-3 items-center justify-center`}>
              <li className="hover:border-b-2 border-yellow-400 cursor-pointer ml-3 ">Home</li>
              <li className="hover:border-b-2 border-yellow-400 cursor-pointer ">About</li>
              <li className="hover:border-b-2 border-yellow-400 cursor-pointer ">Resume</li>
              <li className="hover:border-b-2 border-yellow-400 cursor-pointer ">Services</li>
              <li className="hover:border-b-2 border-yellow-400 cursor-pointer ">Skills</li>
              <li className="hover:border-b-2 border-yellow-400 cursor-pointer ">Projects</li>
              <li className="hover:border-b-2 border-yellow-400 cursor-pointer ">Contact</li>
            </ul>
            <div  className='flex absolute top-2 right-4 md:hidden w-[20px]' onClick={HandleNav}>
              {nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;