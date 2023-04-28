import React from 'react'
import Questions from './Questions'
import { Button, Accordion, AccordionItem } from '@chakra-ui/react'
import {Howl} from 'howler'

const QuestionList = (props) => {

  // const soundPlay = (src) =>{
  //   const sound = new Howl ({
  //     src,
  //     html5: true
  //   })
  //   sound.play()
  // }
  


  
  return (
    <div>
      <Accordion allowToggle allowMultiple={false} pt="8%" pb="10%" >
      
        {props.tableData.map((object) =>{
          if(object.id<=11){
          return(
          <AccordionItem border='2px' borderRadius='30px' mb='4%' bgColor="rgb(255, 241, 48)" color='#09008a' >
            <Questions key={object.id} data={object} level={props.level} />
          </AccordionItem>
          )
        }})
        }
      </Accordion>
    </div>
  )
}

export default QuestionList
