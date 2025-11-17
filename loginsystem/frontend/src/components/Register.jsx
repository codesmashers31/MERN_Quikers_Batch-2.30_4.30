import  { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navicate = useNavigate()

    const [registerData,setRegisterData] = useState({username:"",email:"",password:""})

const handlechange = (e)=>{

setRegisterData({...registerData,[e.target.name]:e.target.value})

}
 
const handlesubmit = async(e)=>{
  e.preventDefault()
   const register = await axios.post("http://localhost:3000/api/auth/create",registerData)
   
   alert(register.data.msg)

   setRegisterData({username:"",email:"",password:""})

   navicate('/login')

}

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input onChange={handlechange} type="text" value={registerData.username} name='username' placeholder='Enter the Name' />
         <input onChange={handlechange} type="email" name='email' value={registerData.email} placeholder='Enter the Email' />
          <input onChange={handlechange} type="password" name='password' value={registerData.password} placeholder='Enter the Password' />
          <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register
