import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import { Heading, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <div className="left-sidebar-heading">
        <Heading size='xl'>நிலைகள் : </Heading> 
      </div> 
      <nav className='side-nav'>
        <NavLink to='/Test1/Level1' className='side-nav-links' activeClassName='active'>
          <Heading size='md'>நிலை 1</Heading>
        </NavLink>
        <NavLink to='/Test1/Level2' className='side-nav-links' activeClassName='active'>
          <Heading size='md'>நிலை 2</Heading>
        </NavLink>
        <NavLink to='/Test1/Level3' className='side-nav-links' activeClassName='active'>
          <Heading size='md'>நிலை 3</Heading>
        </NavLink>
        <NavLink to='/Test1/Level4' className='side-nav-links' activeClassName='active'>
          <Heading size='md'>நிலை 4</Heading>
        </NavLink>
        <NavLink to='/Test1/Level5' className='side-nav-links' activeClassName='active'>
          <Heading size='md'>நிலை 5</Heading>
        </NavLink>      
        <NavLink to='/Test1/Level6' className='side-nav-links' activeClassName='active'>
          <Heading size='md'>நிலை 6</Heading>
        </NavLink>   
        <NavLink to='/Home' className='side-nav-links' activeClassName='active'>
          <Heading size='md'><FontAwesomeIcon icon={faHouse} /></Heading>
        </NavLink>
      </nav>
    </div>
  )
}

export default LeftSidebar