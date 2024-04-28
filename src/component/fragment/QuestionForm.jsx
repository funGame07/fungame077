import { useContext } from "react"
import { SomeContext } from "../../pages/Question"
import QuestionBox from "../element/QuestionBox"
import Submit from "../element/Submit"

function QuestionForm(){
    const {SubmitFunc} = useContext(SomeContext)
    //question box can more than 1
    return (
        <form action="" method='post' onSubmit={SubmitFunc}>
            <QuestionBox type='text' placeholder="Nama anda" id='nama' title='Nama' objKey='name'/>
            <QuestionBox type='text' placeholder="Kelas anda" id='kelas' title='Kelas' objKey='class'/>
            <QuestionBox type='radio' name="first" title='Bagaimana pendapat anda mengenai pelaksanaan kurikulum merdeka?'/>
            <QuestionBox type='radio' name="second" title='Seberapa suka anda terhadap kurikulum merdeka?'/>
            <QuestionBox type='radio' name="third" title='Bagaimana tingkat kreatifitas anda setelah menjalani kurikulum merdeka?'/>
            <QuestionBox type='radio' name="forth" title='Bagaimana kesan anda terhadap kurikulum merdeka?'/>
            <QuestionBox type='radio' name="fifth" title='Bagaimana tingkat penggunaan fasilitas sekolah dalam kurikulum merdeka?'/>
            <QuestionBox type='radio' name="sixth" title='Bagaimana partisipasi anda dalam pembelajaran di kurikulum merdeka?'/>
            <QuestionBox type='radio' name="seventh" title='Bagaimana tingkat kepuasan anda dalam kurikulum merdeka?'/>
            <QuestionBox type='radio' name="eighth" title='Bagaimana fleksibilitas yang diberikan oleh kurikulum merdeka dalam pembelajran?'/>
            <QuestionBox type='radio' name="ninth" title='Bagaimana tingkat keaktifan siswa dalam kurikulum merdeka?'/>
            <QuestionBox type='text' placeholder="Pendapat anda" id="pendapat" title='Bagaimana pendapat anda dalam kurikulum merdeka?'/>
            <Submit />
        </form>
    )
}

export default QuestionForm