// import { useLocation } from "react-router-dom";
import About from "./About";

function Contact() {

// const location = useLocation()


const datas = localStorage.getItem("usertable")

const change = JSON.parse(datas)



const {username,age} = change


  return (
    <>
       <div className="bg-blue-900 text-white p-10">
        <h1> {username}
        {age}</h1>

       
    <p></p>


   
       </div>
    </>
  )
}

export default Contact;