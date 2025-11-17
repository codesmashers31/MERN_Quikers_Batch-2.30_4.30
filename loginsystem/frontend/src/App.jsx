import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import DashBoard from './components/DashBoard'

const App = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Register/>} />
         <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
    </Routes>


  )
}

export default App
