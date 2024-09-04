import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <div className='grid grid-cols-4 mx-4'>
            <div>
                <h1 className='text-2xl font-bold'>About</h1>
                <p>I'm full stack developer .I have done a lot of projects.I got invaluable experience from my work.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Links</h1>
                <ul>
                    <li className='flex items-center '><FaLongArrowAltRight/>Home</li>
                    <li className='flex items-center'> <FaLongArrowAltRight/>About</li>
                    <li className='flex items-center'> <FaLongArrowAltRight/>services</li>
                    <li className='flex items-center'> <FaLongArrowAltRight/>skills</li>
                    <li className='flex items-center'> <FaLongArrowAltRight/>Projects</li>
                    <li className='flex items-center'> <FaLongArrowAltRight/>Contacts</li>
                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Services</h1>
                <p>Full stack Development</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'> Have a Question?</h1>
                <p>+251954121503</p>
                <p>niceman1234man</p>
                <p>yihunie</p>
            </div>
            <div>
                <h1></h1>
            </div>

        </div>
    </div>
  )
}

export default Footer