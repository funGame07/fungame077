import { createContext, useRef,useState } from "react"
import QuestionLayout from "../component/layouts/QuestionLayout"

export const SomeContext = createContext()

function Question(){
    const option = useRef(['','','','','','','','',''])
    const answer = useRef({
      nama: 'anonim',
      kelas: 'x',
      pendapat: 'nothing'
    })

    function addOption(index, value){
        option.current[index] = value
        console.log(option.current)
    }
      
    function addAnswer(e){
        answer.current[e.target.id] = e.target.value
        console.log(answer.current)
    }

    function whatsappFunc(){
        const url = "https://wa.me/6281396716769?text=halo"
        window.open(url, '_blank')
    }

    function SubmitFunc(e){
        e.preventDefault()
        alert('thanks')
        location.assign('/react-tw/done')
        
    }

    const toSend = {
        whatsappFunc,
        SubmitFunc,
        addOption,
        addAnswer
    }

    return (   
        <SomeContext.Provider value={toSend}> 
            <QuestionLayout />
        </SomeContext.Provider>
    )
}

export default Question