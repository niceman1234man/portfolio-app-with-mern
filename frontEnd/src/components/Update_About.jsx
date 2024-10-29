import React from 'react'

function UpdateAbout() {

    useEffect(()=>{
        axios.get('http://localhost/9000/about/me').then((result)=>{
         setAbout(result.data);
        }).catch((error)=>{
         console.log(error);
        })
       },[])

       const submitAbout = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:9000/home", about)
          .then((result) => {
            console.log(result);
            alert("About added successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      };

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
<form className="flex flex-col" onSubmit={submitAbout}>
  <input
    type="file"
    name="photo"
    className="p-2 border border-black my-2"
    value={about.photo}
    onChange={handleAboutChange}
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

export default  UpdateAbout;