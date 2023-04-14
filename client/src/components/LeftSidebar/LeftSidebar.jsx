import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <div className="left-sidebar-heading">
        <h2>Topics:</h2>  
      </div> 
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>All</p>
        </NavLink>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Surroundings</p>
        </NavLink>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Animals</p>
        </NavLink>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Birds</p>
        </NavLink>
        <NavLink to='/' className='side-nav-links' activeClassName='active'>
          <p>Nature</p>
        </NavLink>       
      </nav>
    </div>
  )
}

export default LeftSidebar
