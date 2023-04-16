import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
const TestPage = () => {
  return (
    <div className='t1-main-container'>
      <Navbar/>
      <div className="t1-bars">
        <div className="t1-left">
          <LeftSidebar/>
        </div>
        <div className="t1-main">
          
        </div>
        <div className="t1-right">

        </div>
      </div>
    </div>
    
  )
}

export default TestPage
