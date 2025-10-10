import { useState } from "react";

const Register=()=>{
// const[name,setName]=useState("")
// const[email,setEmail]=useState("")
// const[age,setAge]=useState("")

const [form,setForm] = useState({username:"",email:"",age:""})


    console.log("Component running..");
    

const change =(e)=>{


   
setForm({...form,[e.target.name]:e.target.value})





}

const handleclick  = (e)=>{
 e.preventDefault()
 
// setShow(form)
localStorage.setItem("users",JSON.stringify(form))
alert("succfully done")
setForm({username:"",email:"",age:""});

}




return<>
<h1>Register</h1>
<form>
    <input type="text" onChange={change} name="username" value={form.username} placeholder="Enter the Name" />
    <input type="text" onChange={change} name="email" value={form.email}  placeholder="Enter the email"/>
    <input type="text" onChange={change} name="age"  value={form.age} placeholder="Enter the age"/>
    <button onClick={handleclick} >Submit</button>
</form>
<div>
    <p>{form.username}</p>
    <p>{form.email}</p>
    <p>{form.age}</p>
</div>

</>
}
export default Register;