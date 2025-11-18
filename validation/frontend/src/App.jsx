import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [validatedatas,setValidateDatas] = useState({firstname:"",email:"",password:""})
 const [msg,setMsg] = useState("")
  const handlechange = (e)=>{
  
    const {name,value} = e.target
   
    setValidateDatas({...validatedatas,[name]:value})

  }

  const handlesubmit = async(e)=>{
    e.preventDefault()
try {
  
    const validatesend = await axios.post("http://localhost:3000/api/validate/create",validatedatas)
     setMsg(validatesend.data.msg)
     setValidateDatas({firstname:"",email:"",password:""})
  
} catch (error) {

  if(error.response){
    setMsg(error.response.data.msg)
  }else{
    setMsg('Server Error')
  }
  
}

  }


  return (
    <>
      <div>
        <form onSubmit={handlesubmit}>
          <input type="text" onChange={handlechange} placeholder='Enter the First Name' name='firstname' value={validatedatas.firstname} />
          <input type="email" onChange={handlechange} placeholder='Enter the email' name='email' value={validatedatas.email} />
          <input type="password" onChange={handlechange} placeholder='Enter the password' name='password' value={validatedatas.password} />
          <input type="submit" value="Register" />
        </form>

        <div>
          {}
        {msg && <p style={{color:msg==="Successfully done"?"green":"red"}}>{msg}</p>}
        </div>
      </div>
    </>
  )
}

export default App
