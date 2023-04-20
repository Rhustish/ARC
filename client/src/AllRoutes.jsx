import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Learning from './pages/Learning/Learning'
import Home from './pages/Home/Home'
import Arrival from './pages/Arrival/Arrival'
import Signup from './pages/Signup/Signup'
import TestPage1 from './pages/TestPage1/TestPage1'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Learning' element={<Learning/>}/>
            <Route path='/' element={<Arrival/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Test1/Level1' element={<TestPage1/>}/>
            <Route path='/Test1/Level2' element={<TestPage1/>}/>
            <Route path='/Test1/Level3' element={<TestPage1/>}/>
            <Route path='/Test1/Level4' element={<TestPage1/>}/>
            <Route path='/Test1/Level5' element={<TestPage1/>}/>
            <Route path='/Test1/Level6' element={<TestPage1/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
