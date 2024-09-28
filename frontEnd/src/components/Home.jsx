import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

import me2 from '../assets/me2.jpg'

function Home() {
  return (
    <div className='bg-black w-full py-16 mt-0 h-screen'>
        <div className='max-w-[1240px] mx-auto flex items-center justify-center'>
        <div className='text-white'>
        <h2 className='text-[30px] p-2'>Hello!</h2>
        <p className='text-3xl font-semibold md:text-4xl lg:text-5xl font-serif '> <Typewriter words={[ "I'm Yihunie Tarekegn"," Full stack Developer"]}
            typeSpeed={120}
            backSpeed={130}
            loop/></p>
            <div className='flex items-center justify-center mt-6 mx-auto'>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-2 mx-auto text-black'>My Works</button>
        </div>
        </div>

</div>
</div>
   
  )
}

export default Home