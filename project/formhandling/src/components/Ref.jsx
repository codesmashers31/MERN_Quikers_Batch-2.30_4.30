import { useRef } from "react";


const Ref = ()=>{

console.log('Components running');

const making = useRef(null)

const show = useRef(null)

// const [making,setMaking] = useState("")
  
  const teaprocess = ()=>{

    console.log('Tea Process Going');
    
  const data = making.current.value
  

  show.current.innerText = data


  }



  return (

    <>
    <div className="flex justify-center items-center">

       <input ref={making} onChange={teaprocess} className="bg-amber-800 mt-10 text-white p-1" type="text" placeholder="Enter the Number"  />
        {/* <button className="bg-black text-white p-1 rounded mt-10 mx-1" >Submit</button> */}
      <p ref={show}></p>
    </div>



   <div>
    <div contentEditable>

    </div>
   </div>
   

    </>
  )

}

export default Ref;