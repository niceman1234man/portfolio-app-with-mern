import React from 'react'
import works from '../assets/works.png'
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className='w-full bg-white py-16 text-black font-semibold'>
        <div className='max-w-[1240px] mx-auto' >
        <h1 className='text-center text-3xl'>My Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl py-8'>
                <h1 className='text-center font-bold text-2xl py-4'>Title</h1>
                <p className='p-2'>Create stunning text effects with our font 
                    style text effect generator. Choose from a variety 
                    of fonts and effortlessly transform your text into a 
                    3D masterpiece. Add texture and depth to your words, 
                    whether you want to evoke the wildness of a
                     leopard or the charm of a zoo full of animals.</p>
                     <img src={works} alt="" className='p-4' />
                     <div className='flex items-center justify-center'>
                     <button className='flex p-2 mx-2 items-center bg-blue-400 rounded-lg'> <FaGithub/>Repo</button>
                     <button className='bg-blue-400 p-2 rounded-lg'>Live</button>
                     </div>
                   
            
            </div>

            <div className='w-full shadow-xl py-8'>
                <h1 className='text-center font-bold text-2xl py-4'>Title</h1>
                <p className='p-2'>Create stunning text effects with our font 
                    style text effect generator. Choose from a variety 
                    of fonts and effortlessly transform your text into a 
                    3D masterpiece. Add texture and depth to your words, 
                    whether you want to evoke the wildness of a
                     leopard or the charm of a zoo full of animals.</p>
                     <img src={works} alt="" className='p-4' />
                     <div className='flex items-center justify-center'>
                     <button className='flex p-2 mx-2 items-center bg-blue-400 rounded-lg'> <FaGithub/>Repo</button>
                     <button className='bg-blue-400 p-2 rounded-lg'>Live</button>
                     </div>
                   
            
            </div>
            <div className='w-full shadow-xl py-8'>
                <h1 className='text-center font-bold text-2xl py-4'>Title</h1>
                <p className='p-2'>Create stunning text effects with our font 
                    style text effect generator. Choose from a variety 
                    of fonts and effortlessly transform your text into a 
                    3D masterpiece. Add texture and depth to your words, 
                    whether you want to evoke the wildness of a
                     leopard or the charm of a zoo full of animals.</p>
                     <img src={works} alt="" className='p-4' />
                     <div className='flex items-center justify-center'>
                     <button className='flex p-2 mx-2 items-center bg-blue-400 rounded-lg'> <FaGithub/>Repo</button>
                     <button className='bg-blue-400 p-2 rounded-lg'>Live</button>
                     </div>
                   
            
            </div>
        </div>
        </div>

    </div>
  )
}

export default Projects