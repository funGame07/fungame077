import Label from "./Label"
import Input from "./Input"

function QuestionBox(){
    return (
        <div className='bg-white h-fit p-3 mb-3 border border-green-800 rounded-lg'>
          <Label id='nama' title='Nama' />
          <Input type='text' placeholder="Nama anda" id='nama'/>
        </div>
    )
}

export default QuestionBox