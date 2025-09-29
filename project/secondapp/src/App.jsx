
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contect from "./pages/Contect"
import Hooks_Process from "./components/Hooks_Process"
import Fun from "./components/Fun"
import Products from "./components/Products"
import Class from "./components/Class"


function App() {
  

  return (
    <>
     <NavBar/>
     

     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contect" element={<Contect/>} />

      <Route path="/hooksprocess" element={<Hooks_Process/>}/>
      <Route path="/class" element={<Class />} />
      <Route path="/useeff" element={<Products />} />
     </Routes>
    </>
  )
}

export default App
