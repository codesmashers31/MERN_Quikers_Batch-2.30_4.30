import { Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ObjectProcess from "./components/ObjectProcess";
import Hooks from "./components/Hooks";



const App = ()=>{

  return <>
  
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/rendring" element={<ObjectProcess/>} />
    <Route path="/hooks" element={<Hooks/>} />
    <Route />
    <Route />
   </Routes>
  {/* <NavBar/> */}


  
  
  </>
}

export default App;