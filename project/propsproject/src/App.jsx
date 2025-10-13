
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Contact from "./components/Contact"
import Home from "./components/Home"
import About from "./components/About"
import FormData from "./components/FormData"


function App() {




  return (
    <>

  

       <Navbar/>

         <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact   />} />
      <Route path="/about" element={<About    />} />
      <Route path="/form" element={<FormData />} />
    </Routes>
     
    </>
  )
}

export default App
