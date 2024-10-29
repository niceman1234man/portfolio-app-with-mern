import React from 'react'

function updateService() {

    const handleServiceChange = (e) => {
        const { name, value } = e.target;
        setService((prev) => ({ ...prev, [name]: value }));
      };



  return (
    <div className="py-4 w-full">
    <h1 className="font-bold text-center p-3">Services</h1>
    <form className="flex flex-col" onSubmit={submitService}>
      <input
        type="text"
        placeholder="Service Name"
        name="serviceName"
        className="p-2 border border-black my-2"
        onChange={handleServiceChange}
      />
      <textarea
        placeholder="Description"
        name="desc"
        className="p-2 border border-black my-2"
        onChange={handleServiceChange}
      />
      <button type="submit" className="p-2 my-2 bg-cyan-600">
        Save
      </button>
    </form>
  </div>

  )
}

export default updateService;