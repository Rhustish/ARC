import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Learning from './pages/Learning/Learning'
import Home from './pages/Home/Home'
import Arrival from './pages/Arrival/Arrival'
import Signup from './pages/Signup/Signup'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Learning' element={<Learning/>}/>
            <Route path='/' element={<Arrival/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
