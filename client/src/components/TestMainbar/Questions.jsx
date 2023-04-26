import React, { useState,useEffect,useContext,useRef } from 'react'
import { 
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  HStack,
  VStack,
  RadioGroup,
  Radio,
  Box } from '@chakra-ui/react';
import AudioContext from '../../context/audioContext'
import doorbell from '../../assets/doorbell.mp3'
import {storage} from '../../firebaseConfig'

const Questions = (props) => {

//sample audio handler
  const audioRef = useRef(null)

  const handlePlay = () =>{
    audioRef.current.currentTime = 0;
    audioRef.current.play()
  }
//

//individual answer management states
  const[anst1,setanst1] = useState('')//stores the actual answer
  const[anst2,setanst2] = useState('') 
  const[anst3,setanst3] = useState('')

  const [t1,sett1] = useState('')//stores the answer input by user
  const [t2,sett2] = useState('')
  const [t3,sett3] = useState('')

  const[t1ren,sett1ren] = useState(true)//checks which button to render, one with audio or one without it
  const[t2ren,sett2ren] = useState(true) 
  const[t3ren,sett3ren] = useState(true)
//

//audio randomizer mechanism
//**Q1 
  useEffect( () => {
    let x=Math.floor(Math.random()*100)
    if(x%2==0){
      setanst1("ஆம்")
      sett1ren(true)
    }
    else{
      setanst1("இல்லை")
      sett1ren(false)
    }
    console.log("world",anst1)
  },[t1ren,anst1])
//**Q2
  useEffect( () => {
    let x=Math.floor(Math.random()*100)
    if(x%2==0){
      setanst2("ஆம்")
      sett2ren(true)
    }
    else{
      setanst2("இல்லை")
      sett2ren(false)
    }
    console.log("llo",anst1)
  },[t2ren,anst2])
//**Q3
  useEffect( () => {
    let x=Math.floor(Math.random()*100)
    if(x%2==0){
      setanst3("ஆம்")
      sett3ren(true)
    }
    else{
      setanst3("இல்லை")
      sett3ren(false)
    }
    console.log("he",anst1)
  },[t3ren,anst3])
//


//context usage
  const {audioData, setaudioData, T1, setT1, T2, setT2, T3, setT3, T1st, setT1st, T2st, setT2st, T3st, setT3st  } =useContext(AudioContext)
//

//local answer state management


//sets the audio data in context according to user clicks(put in a promise for easier implementation of animation/side effects later on)
  const setterData = () =>{
    return new Promise( (resolve) =>{
      resolve(setaudioData(props.data))
    })
  }
//


//manages the change in radio buttons selected
  const handleChanget1 = (e) =>{
    sett1(e.target.value)
    if(e.target.value == anst1){
      setT1st(true)
    }
    else{
      setT1st(false)
    }
  }

  const handleChanget2 = (e) =>{
    sett2(e.target.value)
    console.log(e.target.value, "bee",anst2)
    if(e.target.value == anst2){
      setT2st(true)
    }
    else{
      setT2st(false)
    }
  }

  const handleChanget3 = (e) =>{
    sett3(e.target.value)
    if(e.target.value == anst3){
      setT3st(true)
    }
    else{
      setT3st(false)
    }
  }
//

//handles click of accordion button
  const handleClick = async() => {
    setterData()
  }
//


//change the context
  useEffect(()=>{
    setT1(t1)
    setT2(t2)
    setT3(t3)
  },[t1,t2,t3])
//


  return (
    <div className='questions-main-container'>
      <div className="play-button">
              <AccordionButton borderRadius='30px' _expanded={{bg:'rgb(224, 212, 47)', color:'#09008a'}}>
                <Box as="span" flex='1' textAlign='center' onClick={handleClick}>
                  <Heading size='lg' fontWeight='normal'>{props.data.t_name}</Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
                  <audio ref={audioRef}>
                    <source src={doorbell} type="audio/mpeg" />
                  </audio>
            <AccordionPanel pb={4}>
            <VStack >
              <Box border='2px' borderRadius='10px' p={6}>
                <HStack>
                  <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 1:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                  {t1ren?<Button colorScheme='blue' color='#09008a' borderRadius='20px' onClick={handlePlay}>பிளே</Button>:
                    <Button colorScheme='blue' color='#09008a' borderRadius='20px'>பிளே</Button>}
                  
                </HStack>
                  <RadioGroup value={t1}>
                    <HStack justifyContent='center' spacing='40px'>
                      <Radio value="ஆம்" onChange={handleChanget1} colorScheme='blue'>ஆம்</Radio>
                      <Radio value="இல்லை" onChange={handleChanget1} colorScheme='blue'>இல்லை</Radio>
                    </HStack>
                  </RadioGroup>
                  
              </Box>
              <Box border='2px' borderRadius='10px' p={6}>
              <HStack>
                  <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 2:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                  {t2ren?<Button colorScheme='blue' color='#09008a' borderRadius='20px' onClick={handlePlay}>பிளே</Button>:
                    <Button colorScheme='blue' color='#09008a' borderRadius='20px'>பிளே</Button>}
                </HStack>
                  
                    <RadioGroup value={t2}>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio onChange={handleChanget2} value="ஆம்" colorScheme='blue'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={handleChanget2} colorScheme='blue'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                  
              </Box>
              <Box border='2px' borderRadius='10px' p={6}>
              <HStack>
                  <Heading size='md' fontWeight='normal' pb='15px'><strong>சோதனை 3:  </strong>நீங்கள் ஒலி கேட்க முடியுமா?</Heading>
                  {t3ren?<Button colorScheme='blue' color='#09008a' borderRadius='20px' onClick={handlePlay}>பிளே</Button>:
                    <Button colorScheme='blue' color='#09008a' borderRadius='20px'>பிளே</Button>}
                </HStack>
                  
                    <RadioGroup value={t3}>
                      <HStack justifyContent='center' spacing='40px'>
                        <Radio onChange={handleChanget3} value="ஆம்" colorScheme='blue'>ஆம்</Radio>
                        <Radio value="இல்லை" onChange={handleChanget3} colorScheme='blue'>இல்லை</Radio>
                      </HStack>
                    </RadioGroup>
                  
              </Box>
            </VStack>
            </AccordionPanel>
      </div>
    </div>
  )
}

export default Questions