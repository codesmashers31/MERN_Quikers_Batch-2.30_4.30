import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [formdatas,setFromDatas] = useState({username:"",address:""});

  const [savedata,setSaveData] = useState({});
  
 

  const handlechange = (e)=>{

    setFromDatas({...formdatas,[e.target.name]:e.target.value})


  }

const handlesubmit = async(e)=>{

  e.preventDefault()

  try {

    const res = await axios.post("http://localhost:3000/api/auth/datas",formdatas)
    

    //console.log(res.data.msg);
    alert(res.data.msg)
    console.log(res.data.datas);
    
    setSaveData(res.data.datas)


    //  console.log(savedata.username);

    
  } catch (error) {

    console.log('Something error',error);
    
    
  }



}


  return (
    <>
    <div>
      <form onSubmit={handlesubmit}>
        <input onChange={handlechange} type="text" name="username" placeholder='Enter the name'/>
        <input onChange={handlechange} type="text" name="address" placeholder='Enter the Address'/>
        <input type="submit" value="Register" />
      </form>
    </div>

    <h2>{savedata.username}</h2>
    <h2>{savedata.address}</h2>
    </>
  )
}

export default App
