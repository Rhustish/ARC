import React, { useState } from 'react'
import Questions from './Questions'
import { Button } from '@chakra-ui/react'
import {Howl} from 'howler'

const QuestionList = (props) => {

  // const soundPlay = (src) =>{
  //   const sound = new Howl ({
  //     src,
  //     html5: true
  //   })
  //   sound.play()
  // }
  
  const [data,setdata] = useState({
    length: 0
  })

  const handleClick = (obj) => {
    setdata(obj);
    console.log(data)
    props.passer(data)
  }
  
  return (
    <div>
      {props.tableData.map((object) =>(
        <li key={object.id}><Questions data={object} clicker={handleClick}/></li>
      ))
      }
    </div>
  )
}

export default QuestionList
