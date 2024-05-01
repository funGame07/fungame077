import { useContext, useRef, useState } from "react"
import { SomeContext } from "../../pages/Question"
import QuestionBox from "../element/QuestionBox"
import Submit from "../element/Submit"

function QuestionForm(){
    const {SubmitFunc} = useContext(SomeContext)
    
    return (
        <form onSubmit={SubmitFunc}>
            <QuestionBox type='text' placeholder="Nama anda" id='nama' title='Nama' objKey='name'/>
            <QuestionBox type='text' placeholder="Kelas anda" id='kelas' title='Kelas' objKey='class'/>
            <QuestionBox type='radio' name="first" title='Bagaimana pendapat anda mengenai pelaksanaan kurikulum merdeka?' idx={0}/>
            <QuestionBox type='radio' name="second" title='Seberapa suka anda terhadap kurikulum merdeka?' idx={1}/>
            <QuestionBox type='radio' name="third" title='Bagaimana tingkat kreatifitas anda setelah menjalani kurikulum merdeka?' idx={2}/>
            <QuestionBox type='radio' name="forth" title='Bagaimana kesan anda terhadap kurikulum merdeka?' idx={3}/>
            <QuestionBox type='radio' name="fifth" title='Bagaimana tingkat penggunaan fasilitas sekolah dalam kurikulum merdeka?' idx={4}/>
            <QuestionBox type='radio' name="sixth" title='Bagaimana partisipasi anda dalam pembelajaran di kurikulum merdeka?' idx={5}/>
            <QuestionBox type='radio' name="seventh" title='Bagaimana tingkat kepuasan anda dalam kurikulum merdeka?' idx={6}/>
            <QuestionBox type='radio' name="eighth" title='Bagaimana fleksibilitas yang diberikan oleh kurikulum merdeka dalam pembelajran?' idx={7}/>
            <QuestionBox type='radio' name="ninth" title='Bagaimana tingkat keaktifan siswa dalam kurikulum merdeka?' idx={8}/>
            <QuestionBox type='text' placeholder="Pendapat anda" id="pendapat" title='Bagaimana pendapat anda dalam kurikulum merdeka?' objKey='opinion'/>
            <Submit />
        </form>
    )
}

export default QuestionForm