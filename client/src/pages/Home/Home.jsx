import React from 'react'
import {Heading} from'@chakra-ui/react'
import NavCard from '../../components/NavCard/NavCard'
import Test1Img from '../../assets/test_solo.jpg'
import Test2Img from '../../assets/test_multiple.jpg'
import LearnImg from '../../assets/Learning.jpg'
import Settings from '../../assets/settings.jpg'
import Help from '../../assets/help.jpg'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className="nav-block">
        <div className="block">
          <NavCard linker='Learning' bgImage={Test1Img} menuOpt='செவிவழி விழிப்புணர்வு' bgColor='rgb(255, 63, 63)' textColor='rgb(255, 219, 219)'/>
          <NavCard linker='Learning' bgImage={Test2Img} menuOpt='செவிவழி வேறுபாடு' bgColor='rgb(255, 221, 0)' textColor='rgb(163, 125, 0)'/>
          <NavCard linker='Learning' bgImage={LearnImg} menuOpt='கற்றல்' bgColor='rgb(255, 221, 0)' textColor='rgb(163, 125, 0)'/>
        </div>
        <div className="block">
          <NavCard linker='Learning' bgImage={Settings} menuOpt='அமைப்புகள்' bgColor='rgb(255, 221, 0)' textColor='rgb(163, 125, 0)'/>
          <NavCard linker='Learning' bgImage={Help} menuOpt='உதவி' bgColor='rgb(255, 221, 0)' textColor='rgb(163, 125, 0)'/>
        </div>
      </div>      
    </div>
  )
}

export default Home

