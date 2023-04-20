import React from 'react'
import './RightSidebar.css'

const RightSidebar = (props) => {
  return (
    <div className='boxer'>
      {props.data.name}
    </div>
  )
}

export default RightSidebar
