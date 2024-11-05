import React,{useState} from 'react'

function About() {
    const [about, setAbout] = useState({ photo: null, description: "" });
    const handleAboutChange = (e) => {
        const { name, value } = e.target;
        if (name === "photo") {
          setAbout((prev) => ({ ...prev, [name]: e.target.files[0] }));
        } else {
          setAbout((prev) => ({ ...prev, [name]: value }));
        }
      };
    
  return (
    <div className="py-4 w-full">
    <h1 className="font-bold text-center p-3">About Me</h1>
    <form className="flex flex-col">
      <input
        type="file"
        name="photo"
        className="p-2 border border-black my-2"
        onChange={handleAboutChange} // Ensure this is uncommented
      />
      <textarea
        placeholder="Description about Me"
        name="description"
        className="p-2 border border-black my-2"
        value={about.description}
        onChange={handleAboutChange}
      />
      <button type="submit" className="p-2 my-2 bg-cyan-600">
        Save
      </button>
    </form>
  </div>
  )
}

export default About