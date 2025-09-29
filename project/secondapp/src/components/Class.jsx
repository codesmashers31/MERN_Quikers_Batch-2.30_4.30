import { useState } from "react";


const Class=()=>{

    const[isvisible,setvisible]=useState(false)
     const change=()=>{
        setvisible(!isvisible)
     }




    return(
        <>
        <div>
            <h1>This is claa</h1>
            <div>
              {isvisible?<h2 >Welcome to React </h2>:""} 
            </div>
            <button onClick={change}>Change</button>
        </div>
        </>
    )
}
export default Class;