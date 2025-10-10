import { Link, Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
const App = () => {

  return<>
 


  <nav>
    <div>
      <Link to="/">Register</Link> | 
      <Link to="/login">Login</Link> |
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>

   <Routes>
  <Route path="/" element={<Register/>} />
   <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard/>} />
 </Routes>
  </>

}
export default App