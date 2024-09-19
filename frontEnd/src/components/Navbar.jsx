import React from 'react'

function Navbar() {
  return (
    <div className=' h-24 w-full bg-slate-400 bg-fixed'>
        <div className='max-w-[1240px] mx-auto'>
        <div className='fixed flex justify-between mx-4 items-center'>
        <div className='mr-10'>
         YIHUNIE
        </div>
        <div className='ml-96 font-bold'>
         <ul className='flex '>
            <li className='m-4 hover:border-b-2 border-y-fuchsia-950'>Home</li>
            <li className='m-4 hover:border-b-2 border-y-fuchsia-950'>About</li>
            <li className='m-4 hover:border-b-2 border-y-fuchsia-950'>Resume</li>
            <li className='m-4 hover:border-b-2 border-y-fuchsia-950'>Services</li>
            <li className='m-4 hover:border-b-2 border-y-fuchsia-950'>Skills</li>
            <li className='m-4 hover:border-b-2 border-y-fuchsia-950'>Projects</li>
            <li className='m-4 hover:border-b-2 border-y-fuchsia-950'>Contact</li>
         </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar