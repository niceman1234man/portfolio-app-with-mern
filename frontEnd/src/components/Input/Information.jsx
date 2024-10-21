import React from 'react'

function Information() {
  return (
    <div className='w-[1240px] h-screen mx-auto '>
        <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>Home</h1>
        <form className='flex flex-col'>
        <input type="text"  placeholder='Greatting : Hello !!' className='p-2 border border-black my-2' />
        <input type="text" placeholder='Title: like Full stack developer...' className='p-2 border border-black my-2'/>
        <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>
       
        </div>


        <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>About Me</h1>
        <form className='flex flex-col'>
        <input type="file"  placeholder='Greatting' className='p-2 border border-black my-2'/>
        <textarea type="text" placeholder='Description about Me' className='p-2 border border-black my-2'/>
        <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>
       
        </div>
        <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>Skills</h1>
        <form className='flex flex-col'>
        <input type="text"  placeholder="Skill's Name" className='p-2 border border-black my-2'/>
        <input type="file" placeholder='Description' className='p-2 border border-black my-2'/>
        <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>
       
        </div>
        <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>Services</h1>
        <form className='flex flex-col'>
        <input type="text"  placeholder='Service Name' className='p-2 border border-black my-2'/>
        <textarea type="text" placeholder='Description' className='p-2 border border-black my-2'/>
        <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>
       
        </div>
        <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>Contacts</h1>
        <form className='flex flex-col'>
        <input type="text"  placeholder='Greatting' className='p-2 border border-black my-2'/>
        <input type="text" placeholder='Title' className='p-2 border border-black my-2'/>
        <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>
       
        </div>

    </div>
  )
}

export default Information