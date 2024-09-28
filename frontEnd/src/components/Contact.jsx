import React from 'react'
import image from '../assets/image.png'
import image2 from '../assets/logo.png'
import me2 from '../assets/me2.jpg'

import linkedin from '../assets/linkedin.png'
function Contact() {
  return (
    <div className='mx-auto bg-black text-white w-full  py-16'>
        <h1 className='text-2xl text-center p-4 font-bold'>Contact Me</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-8'>
        <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full bg-slate-500 p-4 w-[90px]'>
                <img src={image} alt="" className='w-[70px] '/>
                </div>
            <p className='py-4 text-2xl font-bold'>Phone</p>
            <a href="" className=''>+251954121503</a>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full bg-slate-500 p-4 w-[90px]'>
                <img src={linkedin} alt="" className='w-[70px] '/>
                </div>
            <p className='py-4 text-2xl font-bold'>LinkedIn</p>
            <a href="" className=''>Yihunie</a>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full bg-slate-500 p-4 w-[90px]'>
                <img src={image} alt="" className='w-[70px] '/>
                </div>
            <p className='py-4 text-2xl font-bold'>Phone</p>
            <a href="" className=''>+251954121503</a>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <div className='rounded-full bg-slate-500 p-4 w-[90px]'>
                <img src={image} alt="" className='w-[70px] '/>
                </div>
            <p className='py-4 text-2xl font-bold'>Phone</p>
            <a href="" className=''>+251954121503</a>
        </div>

        
        </div>
        <div className=' max-w-[1240px] mx-auto'>
            
            <form className='flex flex-col bg-white p-8 rounded-md w-[70%] mx-auto my-6'>
            <input type="text" placeholder='Your Name' className='border border-black m-2 p-2' />
            <input type="email" placeholder='Email' className='border border-black m-2 p-2'/>
            <input type="text" placeholder='Subject' className='border border-black m-2 p-2'/>
            <textarea placeholder='Message' rows={6} className='border border-black m-2 p-2'></textarea>
            <button type='submit' className='bg-[#00df9a] w-[200px] rounded-md p-2 text-center flex items-center justify-center mx-auto text-xl mt-6 text-black'>Send Message</button>
            </form>

        </div>
    </div>
  )
}

export default Contact