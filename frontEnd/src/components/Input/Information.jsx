import React, { useState } from 'react'
import axios from 'axios'



function Information() {

  const [home, setHome] = useState({ greating: "", title: "" });
  const [about, setAbout] = useState({ photo: "", description: "" });
  const [skill, setSkill] = useState({ skillName: "", pic: "" });
  const [service, setService] = useState({ serviceName: "", desc: "" });
  const [pic, setPic] = useState("");

  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http//localhost')
    
  }

  const handleHome = (e) => {
    const { name, value } = e.target;
    setHome((prev) => ({ ...prev,[name]: value }))
  }
  const handleAbout = (e) => {
    const { name, value } = e.target;
    setAbout((prev) => ({ ...prev, [name]: value }))
  }

const handleSkill = (e) => {
  const { name, value } = e.target;
  setSkill((prev) => ({ ...prev, [name]: value }))
}
  const handleService = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className='w-[1240px] h-screen mx-auto '>
      <div className='py-4 w-full mx-auto'>
        <h1 className='font-bold text-center p-3'>Home</h1>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input type="text" placeholder='Greatting : Hello !!' className='p-2 border border-black my-2' name='greating' value={home.greating} onChange={handleHome} />
          <input type="text" placeholder='Title: like Full stack developer...' className='p-2 border border-black my-2' name='title' onChange={handleHome} />
          <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>

      </div>


      <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>About Me</h1>
        <form className='flex flex-col'>
          <input type="file" placeholder='Greatting' name='photo' className='p-2 border border-black my-2' onChange={handleAbout} />
          <textarea type="text" placeholder='Description about Me' name='description' className='p-2 border border-black my-2' onChange={handleAbout}/>
          <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>

      </div>
      <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>Skills</h1>
        <form className='flex flex-col'>
          <input type="text" placeholder="Skill's Name" name='skillName' className='p-2 border border-black my-2' onChange={handleSkill} />
          <input type="file" placeholder='Description' name='pic' className='p-2 border border-black my-2' onChange={handleSkill}/>
          <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>

      </div>
      <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>Services</h1>
        <form className='flex flex-col'>
          <input type="text" placeholder='Service Name' name='serviceName' className='p-2 border border-black my-2' onChange={handleService} />
          <textarea type="text" placeholder='Description' name='desc' className='p-2 border border-black my-2'  onChange={handleService}/>
          <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>

      </div>
      <div className='py-4 w-full'>
        <h1 className='font-bold text-center p-3'>Contacts</h1>
        <form className='flex flex-col'>
          <input type="text" placeholder='Greatting' className='p-2 border border-black my-2' />
          <input type="text" placeholder='Title' className='p-2 border border-black my-2' />
          <button type='submit' className='p-2 my-2 bg-cyan-600'>Save</button>

        </form>

      </div>

    </div>
  )

}
export default Information