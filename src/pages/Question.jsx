import { createContext } from "react"
import QuestionLayout from "../component/layouts/QuestionLayout"

export const SomeContext = createContext()

function Question(){
    function whatsappFunc(){
        const url = "https://wa.me/6281396716769?text=halo"
        window.open(url, '_blank')
    }

    function SubmitFunc(){
        alert('thanks')
    }

    const toSend = {
        whatsappFunc,
        SubmitFunc
    }

    return (   
        <SomeContext.Provider value={toSend}> 
        {console.log('hi')}
            <QuestionLayout />
        </SomeContext.Provider>
    )
}

export default Question