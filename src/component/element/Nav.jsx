import Image from "./Image"

function Nav(){
    function infoFunc(){
        document.getElementById('info').style.display = 'flex'
    }

    return (
        <nav className='flex h-12 items-center justify-between px-4 bg-white'>
            <h1 className='text-center text-xl font-semibold tracking-tight font-[poppins]'>Questionnaire</h1>
            <div className='flex gap-2'>
                <Image src="whatsapp.png"/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={infoFunc}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
            </div>
    </nav>

    )
}

export default Nav