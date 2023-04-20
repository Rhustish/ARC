import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { Heading } from '@chakra-ui/react'
import TestMainbar from '../../components/TestMainbar/TestMainbar'
import { useLocation } from 'react-router-dom'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import Progressbar from '../../components/Progressbar/Progressbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './TestPage1.css'
const TestPage1 = () => {

  const location  = useLocation()
  let page_head = ''
  let json_getter = '';
  const [tableData,settableData] = useState({Data:{
    length:0
  }})

  const [select,setSelect] = useState({
    image:'',
    audio:'',
    name_audio:'',
    name:''
  })

  const onSelect = () =>{setSelect()}

  switch(location.pathname){
    case '/Test1/Level1':
      page_head='நிலை 1 - காட்சி குறிப்புகளுடன்'
      json_getter='I'
      break;
    case '/Test1/Level2':
      page_head = 'நிலை 2 - காட்சி குறிப்புகள் இல்லாமல்'
      json_getter='II'
      break;
    case '/Test1/Level3':
      page_head = 'நிலை 3 - அருகிலுள்ள ஒலிகள்'
      json_getter='III'
      break;
    case '/Test1/Level4':
      page_head = '. நிலை 4 - தூர ஒலிகள்'
      json_getter='IV'
      break;
    case '/Test1/Level5':
      page_head = 'நிலை 5 - அமைதியான சூழ்நிலையில்'
      json_getter='V'
      break;
    case '/Test1/Level6':
      page_head = 'நிலை 6 - பின்னணி இரைச்சல் முன்னிலையில்'
      json_getter='VI'
      break;
  }

  useEffect(()=>{
    axios
    .get(`db_json/Test1_${json_getter}_A_1.json`)
    .then(response =>{
      settableData(response.data)
    })   
    .catch(error => {
      console.log('Error fetching data:',error)
    })
  },[json_getter])

  const [data, setdata] = useState({
    length: 0
  })

  const passer = (obj) => {
    setdata(obj)
  }

  
  return (
    <div className='t1-main-container'>
      <Navbar/>
      <div className="t1-left">
          <LeftSidebar/>
      </div>
      <div className="t1-bars">
        <div className="t1-main">
          <div className="t1-header">
            <Heading size='2xl' pt='100px'>செவிவழி விழிப்புணர்வு</Heading>
            <Heading size='lg' >{page_head}</Heading>
          </div>
          <div className="t1-mainbar">
          {tableData.Data.length > 0 && (<TestMainbar tableData={tableData.Data} onSelect={onSelect} passer={passer}/>)}
          </div>  
        </div>  
      </div>
      <div className="t1-right">
        <RightSidebar data={data}/>
      </div>
      
    </div>
    
  )
}

export default TestPage1
