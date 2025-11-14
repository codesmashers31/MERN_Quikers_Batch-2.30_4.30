import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  
  const [formdatas,setFormDatas] = useState({planetname:"",planetid:""})
  const [planetdata,setPlanetdata] = useState([])
  const [editid,setEditid] = useState(null)


  const handleChange = (e)=>{

   const {name,value} = e.target

    setFormDatas({...formdatas,[name]:value})

  }

  const handleSubmit = async(e)=>{
    
    e.preventDefault()
   const addPlanet = await axios.post("http://localhost:3000/api/planet/planetenter",formdatas)

   alert(addPlanet.data.msg);
   setFormDatas({planetname:"",planetid:""})
    


  }



  const getplanetdatas = async()=>{

    const getplanet = await axios.get("http://localhost:3000/api/planet/getplanet")
    
    setPlanetdata(getplanet.data.getdatas)


  }


  // getplanetdatas();

useEffect(()=>{
   
  (async()=>{
     await getplanetdatas()
    })()

  

},[planetdata])


const editdatas = async(id)=>{

//alert(id)

const editdatas = await axios.get(`http://localhost:3000/api/planet/editid/${id}`)
console.log(editdatas.data.editdataas);
setFormDatas(editdatas.data.editdataas)
setEditid(id)

}


const updatedatas = async()=>{

  const updatedatanew = await axios.put(`http://localhost:3000/api/planet/updateid/${editid}`,formdatas)
    
  alert(updatedatanew.data.msg);
  setFormDatas({planetname:"",planetid:""})
  setEditid(null)
  
}


const deletedata = async (id)=>{

  const deletedatas = await axios.delete(`http://localhost:3000/api/planet/delete/${id}`)
  alert(deletedatas.data.msg)

}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={formdatas.planetname} name='planetname' placeholder='Enter the Planet Name' />
        <input type="text" onChange={handleChange} value={formdatas.planetid} name='planetid' placeholder='Enter the Planet Id' />
        {editid?<button type='button' onClick={updatedatas}>Update</button>:<button type='submit'>Register</button>}
        
        
      </form>

     

     <div>
      <table>
        <thead>
          <tr>
            <th>
              Planet Name
            </th>
            <th>
              planet ID
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
        {planetdata.map((e)=>(
             <tr key={e._id}>
              <td>{e._id}</td>
             <td>{e.planetname}</td>
             <td>{e.planetid}</td>
             <td><button onClick={()=>editdatas(e._id)}>Edit</button> || <button onClick={()=>deletedata(e._id)}>Delete</button></td>
          </tr>

        ))}

          
        </tbody>
      </table>
     </div>



    </div>
  )
}

export default App
