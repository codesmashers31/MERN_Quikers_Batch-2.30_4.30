/* eslint-disable react-hooks/set-state-in-effect */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  
  const [routedatas,setRouteDatas] = useState({startroute:"",endroute:""})
  const [datastore,setDataStore] = useState([])
  

  const handlechange = (e)=>{


    const values = e.target.value

    setRouteDatas({...routedatas,[e.target.name]:values})
        
  }


  const handleSubmit = async(e)=>{

   e.preventDefault()

   const res = await axios.post("http://localhost:3000/api/chennairoute/insert",routedatas)

   //console.log(res);

   alert(res.data.msg)

   
   
setRouteDatas  ({startroute:"",endroute:""})

  }



  const datafetch = async()=>{

    const res = await axios.get("http://localhost:3000/api/chennairoute/getdata")
     
    const daats = await res.data.datasget
    //console.log(daats);

    setDataStore(daats)


    

  }


  const editdatas = async(id)=>{

    const edit = await axios.get(`http://localhost:3000/api/chennairoute/edit/${id}`)
    console.log(edit.data);

    const datasget = await edit.data.editget
    setRouteDatas(datasget)

    

  }

  useEffect(()=>{
    datafetch()
  },[datastore])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handlechange} value={routedatas.startroute} type="text" name="startroute" placeholder='Enter the Start Route' />
         <input  onChange={handlechange} value={routedatas.endroute} type="text" name="endroute" placeholder='Enter the End Route' />
         <input type="submit" value="Regiter" />
      </form>

      <div>

        {datastore.map((e)=>(

           <div key={e._id}>
            <h1>{e._id}</h1>
              <h1>{e.startroute}</h1>
              <h2>{e.endroute}</h2>
              <button onClick={()=>editdatas(e._id)}>Edit</button>
              <button>Delete</button>
            </div>

        ))}
           
      </div>
    </div>
  )
}

export default App
