import { useContext } from "react"
import { SomeContext } from "../../pages/Question"
import QuestionBox from "../element/QuestionBox"
import Submit from "../element/Submit"

function QuestionForm(){
    const {SubmitFunc} = useContext(SomeContext)
    //question box can more than 1
    return (
        <form action="" method='post' onSubmit={SubmitFunc}>
            <QuestionBox />
            <Submit />
        </form>
    )
}

export default QuestionForm