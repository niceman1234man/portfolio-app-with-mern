import React from 'react'
import html from '../assets/html.png'
import react from '../assets/react.png'

function Skils() {
  return (
    <div className='py-16 bg-slate-500'>
        <div className='max-w-[1240px] mx-auto'>
   
   <h1 className='text-center font-bold text-2xl py-6 my-4'> My Skills</h1>
   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    <div className='flex flex-col items-center'>
        <div className='bg-white p-4 rounded-full w-[100px] md:w-[120px]'>
        <img src={html} alt="" className=' p-4 ' />
        </div>
        <p className='my-3 bg-orange-500 w-32 text-center p-2 rounded-full font-bold'>HTML</p>
    </div>

    <div className='flex flex-col items-center'>
        <div className='bg-white p-4 rounded-full w-[100px] md:w-[120px]'>
        <img src={react} alt="" className=' p-2 ' />
        </div>
        <p className='my-3 bg-orange-500 w-32 text-center p-2 rounded-full font-bold'>HTML</p>
    </div>

    <div className='flex flex-col items-center'>
        <div className='bg-white p-4 rounded-full w-[100px] md:w-[120px]'>
        <img src={html} alt="" className=' p-2' />
        </div>
        <p className='my-3 bg-orange-500 w-32 text-center p-2 rounded-full font-bold'>HTML</p>
    </div>


    <div className='flex flex-col items-center'>
        <div className='bg-white p-4 rounded-full w-[100px] md:w-[120px]'>
        <img src={react} alt="" className=' p-2 ' />
        </div>
        <p className='my-3 bg-orange-500 w-32 text-center p-2 rounded-full font-bold'>HTML</p>
    </div>

   </div>

   </div>
    </div>
  )
}

export default Skils