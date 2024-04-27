import Footer from "../element/Footer"
import QuestionForm from "../fragment/QuestionForm"

function QuestionLayout(){
    return(
    <div className='flex flex-col max-w-[420px] border-s border-e border-slate-700 rounded-lg'>

        <main className='h-fit px-4 py-4 pt-8 bg-slate-100'>
            <QuestionForm />
        </main>
        <Footer />
        
    </div>
    )
}

export default QuestionLayout