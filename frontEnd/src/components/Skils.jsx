import React from 'react'
import html from '../assets/html.png'
import react from '../assets/react.png'

function Skils() {
  return (
    <div>
   
   <h1 className='text-center font-bold text-2xl'> My Skills</h1>
   <div className='grid grid-cols-4'>
    <div className='flex flex-col items-center'>
        <img src={html} alt="" className='w-[80]  '/>
        <p className='my-3'>HTML</p>
    </div>

    <div className='flex flex-col items-center'>
        <img src={html} alt="" className='w-[80]  '/>
        <p className='my-3'>HTML</p>
    </div>

    <div className='flex flex-col items-center'>
        <img src={react} alt="" className='w-[80]  '/>
        <p className='my-3'>REACT</p>
    </div>

    <div className='flex flex-col items-center'>
        <img src={html} alt="" className='w-[80]  '/>
        <p className='my-3'>HTML</p>
    </div>
   </div>


    </div>
  )
}

export default Skils