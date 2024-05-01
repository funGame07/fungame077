import Label from "./Label"
import Input from "./Inputs"

function QuestionBox(props){  
  return (
      <div className='bg-white h-fit p-3 mb-3 border border-green-800 rounded-lg'>
        <Label id={props.id} title={props.title} />
        <Input prop={props} />
      </div>
  )
}

export default QuestionBox