import { useEffect, useState } from "react";

const Register = ()=>{


    const [form,setForm] = useState({email:"",password:"",mobile:""});
    const [formdatas,setFormDatas] = useState([])
    const [msg,setMsg] = useState("");



   const handledata = (e)=>{

    setForm({...form,[e.target.name]:e.target.value})

    //console.log(form);
    

   }


   useEffect(()=>{
    localStorage.setItem("usertable",JSON.stringify(formdatas))
   },[formdatas])


   useEffect(()=>{
    const daats = localStorage.getItem("usertable")

    if(daats) setFormDatas(JSON.parse(daats))

    
   },[])


   const validation = ()=>{
    if(!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Invalid email";
    if(form.password.length < 6) return "Please password must be above 6 digit" ;
    if(!form.mobile.match(/^\d{10}$/)) return "Please enter the 10 digi mobile number";
   return "";
}


   const handlesubmit = (a)=>{

    a.preventDefault()

    const msg = validation()
    if(msg){
            setMsg(msg)
            return;
    }

    setFormDatas([...formdatas,form])

    alert('Register succfully done')
    
    setMsg("")
    setForm({email:"",password:"",mobile:""})
    //  console.log(formdatas);

   }


  
   



    return<>
    
    <div>
        <form onSubmit={handlesubmit}>
            <input type="email" name="email" value={form.email} onChange={handledata}  />
            <input type="password" name="password"  value={form.password} onChange={handledata}  />
            <input type="text" name="mobile" value={form.mobile} onChange={handledata}  />
            <input type="submit" value="Register" />
        </form>
    </div>
    

    <div>
        <p style={{color:"red"}}>{msg}</p>
    </div>


    <table>
        <thead>
            <tr>
                <th>Email</th>
                <th>Mobile</th>
            </tr>
        </thead>

        <tbody>

            {formdatas.map((e,i)=>(

             <tr key={i+1}>
                <td>{e.email}</td>
                 <td>{e.mobile}</td>
            </tr>

            ))}
          
        </tbody>
    </table>
    
    </>

}


export default Register;