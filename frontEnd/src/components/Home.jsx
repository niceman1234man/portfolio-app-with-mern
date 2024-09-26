import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import me2 from '../assets/me2.jpg'

function Home() {
  return (
    <div className='bg-slate-800 w-full py-16 mt-0'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='mx-4 grid md:grid-cols-2 gap-8'>
        <div className='text-white'>
        <h2 className='text-[30px] p-2'>Hello!</h2>
        <p className='text-3xl font-semibold md:text-4xl lg:text-5xl font-serif '> <Typewriter words={[ "I'm Yihunie Tarekegn"," Full stack Developer"]}
            typeSpeed={120}
            backSpeed={130}
            loop/></p>
            <div className='flex items-center justify-center mt-6 mx-auto'>
        <button className='bg-sky-700 p-4 rounded-full text-xl my-8 font-semibold font-sans'>My Works</button>
        </div>
        </div>
<div className='w-[90%]   p-4  flex items-center justify-center rounded-lg mx-auto'>
    <img src={me2} alt="" className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full  border-8 border-fuchsia-950   ' />
</div>
</div>
</div>
    </div>
  )
}

export default Home