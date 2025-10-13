import { useState } from "react";
import { Link } from "react-router-dom";

const FormData = ()=>{
const [form,setForm] = useState({username:"",age:""})

const handlechange = (guru)=>{


setForm({...form,[guru.target.name]:guru.target.value})

//console.log(form);

}

const handlesubmit = (jeevitha)=>{

    jeevitha.preventDefault();

  
    



 
    

   const changedata = JSON.stringify(form)

   console.log(changedata);
   

   localStorage.setItem("usertable",changedata)
    

   alert("succfully done")

   setForm({username:"",age:""})
    

}



    return<>

<form className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md space-y-4" onSubmit={handlesubmit}>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700" >Name</label>
    <input
      type="text"
      name="username"
     onChange={handlechange}
     value={form.username}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-700" >Age</label>
    <input
      type="text"
      name="age"
       value={form.age}
     onChange={handlechange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <button
    type="submit"
    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
  >
    Submit
  </button>
</form>
  

  <Link to="/contact" state={form}>Move to Pdf</Link>
    
    
    </>


    
}

export default FormData;