import Footer from "../element/Footer"
import QuestionForm from "../fragment/QuestionForm"
import Nav from "../element/Nav"

function QuestionLayout(){
    return(
    <div className='flex flex-col max-w-[420px] border-s border-e border-slate-700 rounded-lg'>
        <Nav />
        <main className='h-fit px-4 py-4 pt-8 bg-slate-100'>
        <div className='flex justify-center'>
            <h2 className='text-zinc-700 text-2xl font-[times] text-center font-extrabold tracking-tight mb-8'>
                Jawablah Pertanyaan dibawah ini dengan baik
            </h2>
        </div>
            <QuestionForm />
        </main>
        <Footer />
        
    </div>
    )
}

export default QuestionLayout