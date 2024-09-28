import React from 'react'
import linkedin from '../assets/linkedin.png'

function Footer() {
  return (
    <div className=' py-16 mx-auto bg-slate-500'>
        <div className=''>
        <div className='grid lg:grid-cols-3  gap-8 max-w-[1240px] mx-auto'>
            <div className='p-2 '>
                <h1 className='text-2xl font-bold mb-3'>About</h1>
                <p>I'm full stack developer .I have done a lot of projects.I got invaluable experience from my work.</p>
                <div className='grid grid-cols-5 gap-4 my-2 py-2'>
                    <img src={linkedin} alt="" className='w-[30px]'/>
                    <img src={linkedin} alt="" className='w-[30px]'/>
                    <img src={linkedin} alt="" className='w-[30px]'/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
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
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer