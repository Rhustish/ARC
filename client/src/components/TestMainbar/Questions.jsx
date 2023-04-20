import React, { useState,useEffect } from 'react'
import Progressbar from '../Progressbar/Progressbar'
import { Button } from '@chakra-ui/react';

const Questions = (props) => {
  const [dataset, setdataset] = useState({
    length: 0
  })
  const handleClick = () => {
    setdataset(props.data)
  }

  useEffect(()=>{
    props.clicker(dataset)
  },[dataset])
  
  return (
    <div className='questions-main-container'>
      <div className="play-button">
        <audio src='https://drive.google.com/file/d/1ww0Yja7zqXHoKlBwDRGVtFlssKi3RS3V/view?usp=share_link' controls></audio>
        <p>{props.data.name}</p>
        <Button onClick={handleClick}>click</Button>
      </div>
    </div>
  )
}

export default Questions
