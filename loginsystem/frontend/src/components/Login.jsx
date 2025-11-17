import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

 const navicate = useNavigate()

    const [loginData,setLoginData] = useState({email:"",password:""})

const handlechange = (e)=>{

setLoginData({...loginData,[e.target.name]:e.target.value})

}
 
const handlesubmit = async(e)=>{
 try {

    e.preventDefault()
   const login = await axios.post("http://localhost:3000/api/auth/login",loginData)
   
   if(login.data.success === true){
    alert('Login succfully done')
    setLoginData({username:"",email:"",password:""})
   //console.log(login.data.datas);
   
   navicate('/dashboard')
   }

   
  
 }  catch (error) {
    if (error.response) {
      alert(error.response.data.msg);
    } else {
      alert("Server Error");
    }
  }

}



  return (
    <div>
       <form onSubmit={handlesubmit}>
        
         <input onChange={handlechange} type="email" name='email' value={loginData.email} placeholder='Enter the Email' />
          <input onChange={handlechange} type="password" name='password' value={loginData.password} placeholder='Enter the Password' />
          <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
