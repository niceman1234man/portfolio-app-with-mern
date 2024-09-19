import React from 'react'
import image from '../assets/image.png'
import image2 from '../assets/logo.png'
import me2 from '../assets/me2.jpg'

import linkedin from '../assets/linkedin.png'
function Contact() {
  return (
    <div className=' mx-auto w-full bg-amber-200 py-16'>
        <h1 className='text-2xl text-center p-4 font-bold'>Contact Me</h1>
        <div className='grid grid-cols-4 py-8 gap-8'>
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
        <div className='grid grid-cols-2 max-w-[1240px] mx-auto'>
            <div  className='bg-slate-600 flex justify-center items-center'>
                <img src={me2} alt="" className='w-[360px] my-4 mx-auto rounded-md ' />
            </div>
            
            <form className='flex flex-col bg-white p-8'>
            <input type="text" placeholder='Your Name' className='border border-black m-2 p-2' />
            <input type="email" placeholder='Email' className='border border-black m-2 p-2'/>
            <input type="text" placeholder='Subject' className='border border-black m-2 p-2'/>
            <textarea placeholder='Message' rows={6} className='border border-black m-2 p-2'></textarea>
            <button type='submit' className='bg-yellow-600 rounded-full w-[150px] p-2 text-center flex items-center justify-center mx-auto text-xl'>Send Message</button>
            </form>

        </div>
    </div>
  )
}

export default Contact