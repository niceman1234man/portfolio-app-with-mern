import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Footer() {
  return (
    <div className=' py-16 mx-auto bg-slate-500'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='grid grid-cols-4 mx-4 gap-8'>
            <div className='p-2'>
                <h1 className='text-2xl font-bold mb-3'>About</h1>
                <p>I'm full stack developer .I have done a lot of projects.I got invaluable experience from my work.</p>
            </div>
            <div className='p-2'>
                <h1 className='text-2xl font-bold mb-3'>Links</h1>
                <ul>
                    <li className='flex items-center '>Home</li>
                    <li className='flex items-center'> About</li>
                    <li className='flex items-center'> services</li>
                    <li className='flex items-center'> skills</li>
                    <li className='flex items-center'> Projects</li>
                    <li className='flex items-center'> Contacts</li>
                </ul>
            </div>
            <div className='p-2'>
                <h1 className='text-2xl font-bold mb-3'>Services</h1>
                <p>Full stack Development</p>
            </div>
            <div className='p-2'>
                <h1 className='text-2xl font-bold mb-3'> Have a Question?</h1>
                <p>+251954121503</p>
                <p>niceman1234man</p>
                <p>yihunie</p>
            </div>
            <div>
                <h1></h1> 
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer