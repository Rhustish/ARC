import React from 'react'
import { Link } from 'react-router-dom'
import './NavCard.css'
const NavCard = (props) => {
  return (
    <div className='outer-box'>
      <div className='statement'>
        <h1>{props.text}</h1>
      </div>
      <div className="desc">
        <h2>{props.desc}</h2>
      </div>
      <div className="link-button">
        <Link to='/Learning' className='navi-btn'>{props.btnText}</Link>
      </div>
    </div>
  )
}

export default NavCard
