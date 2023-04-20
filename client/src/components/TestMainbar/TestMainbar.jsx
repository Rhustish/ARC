import React, { useEffect, useState } from 'react'
import QuestionList from './QuestionList'
import './TestMainbar.css'

const TestMainbar = (props) => {
  const [data, setdata] = useState({
    length: 0
  })
  const passerfunc = (obj) => {
    setdata(obj)
    props.passer(data)
  }
  return (
    <div className='tm-main-container'>
      <QuestionList tableData={props.tableData} passer={passerfunc}/>
    </div>
  )
}

export default TestMainbar



