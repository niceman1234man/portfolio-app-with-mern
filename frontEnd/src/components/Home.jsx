import React from 'react'
import me2 from '../assets/me2.jpg'

function Home() {
  return (
    <div className='bg-red-300 w-full py-16 mt-0'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='mx-4 grid grid-cols-2 gap-8'>
        <div className=''>
        <h2 className='text-[30px] p-2'>Hello!</h2>
        <p className='text-5xl'>I'm Yihunie Tarekegn Full satck Developer</p>
        <button className='bg-yellow-400 p-4 rounded-full text-xl my-8'>My Works</button>
        </div>
<div className='w-[90%]   p-4  flex items-center justify-center rounded-lg mx-auto'>
    <img src={me2} alt="" className='w-[300px] rounded-full  border-8 border-fuchsia-950  ' />
</div>
</div>
</div>
    </div>
  )
}

export default Home