import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Learning from './pages/Learning/Learning'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/Learning' element={<Learning/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoutes
