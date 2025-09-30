import { useEffect, useState } from "react";




function Fetch() {
// const [value,updatefuncton] = useState();    
const [product,setProduct] = useState([])

  console.log('commonents running');
  
const fetch_new = async()=>{

    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    //console.log(data);
    setProduct(data.users)
    
    
}

useEffect(()=>{
fetch_new()
},[])

// array.map(()=>(
//    html    
// ))

  return (
    <>
     <div>
       {product.map((e)=>(
       <div key={e.id} className="bg-blue-500 w-100 ">
      <h1 className="mt-20">{e.id}</h1>
      <h2>{e.firstName}</h2>
      <h2>{e.age}</h2>
       </div>
       ))}             
       
     </div>
    </>
  )
}

export default Fetch
