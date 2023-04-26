import React, { useEffect, useState } from 'react'
import QuestionList from './QuestionList'
import './TestMainbar.css'

const TestMainbar = (props) => {
  return (
    <div className='tm-main-container'>
      <QuestionList tableData={props.tableData} />
    </div>
  )
}

export default TestMainbar



