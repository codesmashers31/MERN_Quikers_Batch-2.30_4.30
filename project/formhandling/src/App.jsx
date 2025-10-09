import { useState } from "react";



const  App = ()=> {

  // const leo = {target:{value:"tis is value of input"}}
 //console.log('Components rerender');
  
  // leo.target.value
  const [user,setUser] = useState("");

  const takethevalue = (e)=>{

  
    


     setUser(e.target.value)
    
      

  }
  



  return (
    <>
    <form >
      <label>UserName</label>: 
      <input type="text" onChange={takethevalue}   />
      

     
    </form>

    <p>{user}</p>

    <div className="">

    </div>
    </>
  )
}

export default App
