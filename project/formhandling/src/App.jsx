import { Link, Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"

import Ref from "./components/Ref"


const App = () => {






  return<>
 


  <nav>
    <div>
      {/* <Link to="/ref">Register</Link> | 
      <Link to="/login">Login</Link> |
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/">Ref</Link> */}
    </div>
  </nav>

   <Routes>
  <Route path="/ref" element={<Register/>} />
   <Route path="/login" element={<Login />} />
    <Route path="/" element={<Ref/>} />
 </Routes>






  </>

}
export default App