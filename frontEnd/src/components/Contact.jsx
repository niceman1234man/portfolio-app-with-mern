import React from 'react'
import image from '../assets/image.png'
import image2 from '../assets/logo.png'
function Contact() {
  return (
    <div className='my-4 mx-auto'>
        <h1 className='text-2xl text-center p-4 font-bold'>Contact Me</h1>
        <div className='grid grid-cols-4'>
        <div>
            <img src={image} alt="" className='w-[70px] '/>
            <p>Phone</p>
            <a href="">+251954121503</a>
        </div>
        <div>
            <img src="" alt="" />
            <p>LinkedIn</p>
            <a href=""></a>
        </div>

        <div>
            <img src="" alt="" />
            <p>Telgram</p>
            <a href=""></a>
        </div>

        <div>
            <img src="" alt="" />
            <p>whatsup</p>
            <a href=""></a>
        </div>
        </div>
        <div className='grid grid-cols-2'>
            <div>
                <img src={image2} alt="" />
            </div>
            
            <form className='flex flex-col'>
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