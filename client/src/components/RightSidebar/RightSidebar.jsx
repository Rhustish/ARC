import { useContext,useEffect,useRef } from 'react'
import { Box, VStack, Heading, Divider, Text, Button, HStack, Image} from '@chakra-ui/react'
import React from 'react'
import './RightSidebar.css'
import AudioContext from '../../context/audioContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import doorbell from '../../assets/doorbell.mp3'

const RightSidebar = (props) => {

  const audioNameRef = useRef(null)
  const pageNameRef = useRef(null)
  const insRef = useRef(null)

  const handlePlay = () =>{
    audioNameRef.current.currentTime = 0;
    audioNameRef.current.play()
  }
  const handleIns = () =>{
    insRef.current.currentTime = 0;
    insRef.current.play()
  }
  const handlePageName = () =>{
    pageNameRef.current.currentTime = 0;
    pageNameRef.current.play()
  }

  const {audioData, setaudioData, T1, setT1, T2, setT2, T3, setT3, T1st, setT1st, T2st, setT2st, T3st, setT3st  } = useContext(AudioContext)

  useEffect(() =>{
    setT1('')
    setT2('')
    setT3('')
    setT1st(false)
    setT2st(false)
    setT3st(false)
  },[audioData,setT1,setT2,setT3])

  let score =0
  if(T1st ==true){
    score++
  }
  if(T2st==true){
    score++
  }
  if(T3st==true){
    score++
  }

  console.log(props.data.file_code);


  return (
    <div className='boxer'>
      
      <Box borderLeft='2px' height='90%' borderLeftRadius='30px' bgColor='rgb(39, 161, 255)' p={5} flexWrap='wrap' overflowY='scroll'>
        <VStack height='100%' width='100%' justifyContent='center'>
          <Box height='25%%' border='2px' color='#09008a' width='100%' borderRadius='30px' p={4}> 
            <VStack alignItems='flex-start'> 
              <Heading size='md' textAlign='center'>தேர்வு விவரங்கள்</Heading>  
              <Divider borderColor='purple' />
              <Heading size='md' fontWeight='normal'>{props.page_head}</Heading>
              <HStack flexWrap='wrap'>
                <audio ref={pageNameRef} src={props.dispData.name} />
                <audio ref={insRef} src={props.dispData.instructions} />
                <Button colorScheme='facebook' color='rgb(255, 187, 0)' borderRadius='20px' onClick={handleIns} width='fit-content' textOverflow='ellipsis'>அறிவுறுத்தல்கள்</Button>
                <Button colorScheme='facebook' color='rgb(255, 187, 0)' borderRadius='20px' onClick={handlePageName}>நிலை பெயர்</Button>
              </HStack>
            </VStack>
          </Box>
          <Box height='100%' border='2px' color='#09008a' width='100%' borderRadius='30px' p={4}>
            <VStack><Heading size='md' textAlign='center'>கேள்வி விவரங்கள்</Heading>
              
              <Divider borderColor='#09008a' />
              <Box border='2px' color='#09008a' width='100%' borderRadius='30px' p={4} >
                <VStack alignItems='flex-start'>
                  <HStack justifyContent='center' flexWrap='wrap'>
                    <Heading size='sm'>{audioData.t_name}</Heading>
                    <audio ref={audioNameRef} src={audioData.name_audio} />
                    <Button colorScheme='facebook' color='rgb(255, 187, 0)' borderRadius='20px' onClick={handlePlay}>ஒலி பெயர்</Button>
                    <Text border='2px' p={2} borderRadius='30px'>{score}/3</Text>
                  </HStack>
                
                <Divider borderColor='purple' />                   
                  {T1st?<Text>சோதனை 1: {T1} <FontAwesomeIcon icon={faCheck} beat size="xs" /></Text>: <Text>சோதனை 1: {T1} <FontAwesomeIcon icon={faXmark} beatFade size="xs" /></Text>}
                  {T2st?<Text>சோதனை 1: {T2} <FontAwesomeIcon icon={faCheck} beat size="xs" /></Text>: <Text>சோதனை 1: {T2} <FontAwesomeIcon icon={faXmark} beatFade size="xs" /></Text>}
                  {T3st?<Text>சோதனை 1: {T3} <FontAwesomeIcon icon={faCheck} beat size="xs" /></Text>: <Text>சோதனை 1: {T3} <FontAwesomeIcon icon={faXmark} beatFade size="xs" /></Text>}
                </VStack>
              </Box>
              {props.level=='Level_1' && <Box border='2px'  color='#09008a' width='100%' borderRadius='30px' p={4} align='center' height='100%'>
                <Text pb='15px'>காட்சி குறிப்பு: </Text>
                <Image src={`https://firebasestorage.googleapis.com/v0/b/arc-phase1-sevithiran.appspot.com/o/Test_A_1%2F${props.level}%2F${props.data.file_code}.png?alt=media&token=55ef9ca1-4d23-401e-abe1-faac0f6a5bc7`} boxSize='100' borderRadius='10px'/>
              </Box>
              }
            </VStack>
          </Box>
        </VStack>
      </Box>
    </div>
  )
}

export default RightSidebar