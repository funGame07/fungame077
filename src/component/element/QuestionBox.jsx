import { useRef } from "react"
import Label from "./Label"
import Input from "./Input"


function QuestionBox(props){
  const answer = useRef({})
  
  function addAnswer(objKey, value){
    answer.current = {...answer.current, [objKey]: value}
    console.log(answer.current)
  }
  
  return (
      <div className='bg-white h-fit p-3 mb-3 border border-green-800 rounded-lg'>
        <Label id={props.id} title={props.title} />
        <Input answer={answer} addAnswer={addAnswer} prop={props}/>
      </div>
  )
}

export default QuestionBox