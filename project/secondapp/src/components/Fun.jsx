import { useState } from "react";

const Fun = () =>{
    const [fazil,setFazil]=useState(true)
    const [use, setUse] = useState(0)

     const change = () => {
        setFazil(!fazil)
setUse(use+1)

    }
  
 let desine={
    backgroundColor:fazil?"black":"white",
    color:fazil?"white":"black"
 }


return(<>

<div className="bg-amber-500 h-100 flex justify-center items-center mb-2">
    <div style={desine} className="h-30 w-30 rounded-full flex justify-center  items-center text-white">
         {use}
    </div>
    
</div>
<div className="flex justify-center">
<button className="bg-amber-400 p-1 w-40 h-10 rounded-2xl" onClick={change}>{fazil?"On":"off"}</button>
</div>

</>)
}
export default Fun;