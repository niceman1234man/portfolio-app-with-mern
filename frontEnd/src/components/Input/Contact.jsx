import React from 'react'

function Contact() {
  return (
    <div className="py-4 w-full">
        <h1 className="font-bold text-center p-3">Contacts</h1>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Greeting"
            className="p-2 border border-black my-2"
          />
          <input
            type="text"
            placeholder="Title"
            className="p-2 border border-black my-2"
          />
          <button type="submit" className="p-2 my-2 bg-cyan-600">
            Save
          </button>
        </form>
      </div>
  )
}

export default Contact