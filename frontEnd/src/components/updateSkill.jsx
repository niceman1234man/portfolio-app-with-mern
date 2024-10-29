import React from 'react'

function updateSkill() {

    const handleSkillChange = (e) => {
        const { name, value } = e.target;
        if (name === "pic") {
          setSkill((prev) => ({ ...prev, [name]: e.target.files[0] }));
        } else {
          setSkill((prev) => ({ ...prev, [name]: value }));
        }
      };
    
  return (
    <div className="py-4 w-full">
    <h1 className="font-bold text-center p-3">Skills</h1>
    <form className="flex flex-col" onSubmit={submitSkill}>
      <input
        type="text"
        placeholder="Skill's Name"
        name="skillName"
        className="p-2 border border-black my-2"
        onChange={handleSkillChange}
      />
      <input
        type="file"
        name="pic"
        className="p-2 border border-black my-2"
        onChange={handleSkillChange}
      />
      <button type="submit" className="p-2 my-2 bg-cyan-600">
        Save
      </button>
    </form>
    </div>
  )
}

export default updateSkill;