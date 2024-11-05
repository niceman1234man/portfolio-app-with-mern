import React ,{useState} from 'react'

function Skill() {
  
    const [skill, setSkill] = useState({ photo: null, name: "" });
    const submitSkill = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('photo', skill.photo); // This should be a File object
        formData.append('name', skill.name);   // This should be a string
    
        axios
          .post("http://localhost:9000/home/s", formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
          .then((result) => {
              console.log(result);
              alert("Skill added successfully");
          })
          .catch((error) => {
              console.log(error);
          });
    };
    const handleSkillChange = (e) => {
      const { name, value } = e.target;
      if (name === "photo") {
          setSkill((prev) => ({ ...prev, photo: e.target.files[0] })); // Use the first file
      } else {
          setSkill((prev) => ({ ...prev, [name]: value }));
      }
    };
    
  return (
   
    <div className="py-4 w-full">
    <h1 className="font-bold text-center p-3">Skills</h1>
    <form className="flex flex-col" onSubmit={submitSkill}>
      <label htmlFor="photo" className="my-2">Upload Photo:</label>
      <input
        type="file"
        name="photo"
        className="p-2 border border-black"
        onChange={handleSkillChange}
      />
      <label htmlFor="name" className="my-2">Skill's Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        className="p-2 border border-black my-2"
        placeholder="Skill's Name"
        value={skill.name}
        onChange={handleSkillChange}
      />
      <button type="submit" className="p-2 my-2 bg-cyan-600 hover:bg-cyan-700 transition">
        Save
      </button>
    </form>
  </div>
  )
}

export default Skill