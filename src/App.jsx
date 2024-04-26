import { useState } from 'react'


function App() {

  function whatsapp(){
    const url = "https://wa.me/621396716769?text=halo"
    window.open(url, '_blank')
  }

  return(
    <div className='flex flex-col max-w-[420px] border-s border-e border-slate-700 rounded-lg'>
    <nav className='flex h-12 items-center justify-between px-4 bg-white'>
      <h1 className='text-center text-xl font-semibold tracking-tight font-[poppins]'>Angket</h1>
      <div className='flex gap-2'>
        <button onClick={whatsapp} className='border border-green-800 px-2 py-1 rounded-lg bg-green-500 flex-1 flex-grow-0 text-xs'>Contact</button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
      </div>
    </nav>
    
    <main className='h-fit px-4 py-4 pt-8 bg-slate-100'>
      <div className='flex justify-center'>
        <h2 className='text-zinc-700 text-2xl font-[times] text-center font-extrabold tracking-tight mb-8'>Jawablah Pertanyaan dibawah ini dengan baik</h2>
      </div>
      <form action="" method='post' >
        <div className='bg-white h-fit p-3 mb-3 border border-green-800 rounded-lg'>
          <label htmlFor="nama" className='text-zinc-700 block font-semibold mb-1'>Nama</label>
          <input type="text" id='nama' placeholder='Nama Kamu' className='border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-0 focus:border-b-2 focus:rounded-b-none focus:border-slate-400'/>
        </div>
        <div className='bg-white h-fit p-3 mb-3 border border-green-800 rounded-lg'>
          <label htmlFor="nama" className='text-zinc-700 block font-semibold mb-1'>Kelas</label>
          <input type="text" id='nama' placeholder='Kelas Kamu' className='border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-0 focus:border-b-2 focus:rounded-b-none focus:border-slate-400'/>
        </div>
        <div className='bg-white h-fit p-3 border border-green-800 rounded-lg'>
          <label htmlFor="nama" className='text-zinc-700 block font-semibold mb-1'>Bagaimana kesan anda terhadap fasilitas sekolah sekarang ini ?</label>
          <div className='flex flex-col items-start mt-2 gap-2'>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>😃</div>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>😄</div>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>😅</div>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>🖕</div>         
          </div>
        </div>
        <div className='bg-white h-fit p-3 border border-green-800 rounded-lg mt-3'>
          <label htmlFor="nama" className='text-zinc-700 block font-semibold mb-1'>Bagaimana kesan semasa SMA anda?</label>
          <div className='flex flex-col items-start mt-2 gap-2'>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>😃</div>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>😄</div>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>😅</div>
            <div><input type="radio" name='fav' id='nama' className='border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'/>🖕</div>         
          </div>
        </div>
        <div className='flex justify-center mt-3'>
          <input type="submit" value='Submit' className='bg-lime-500 px-14 py-2 rounded-lg font-semibold text-slate-100'/>
        </div>
      </form>
    </main>

    <footer className='sticky h-11 bg-white bottom-0 flex w-100 justify-center items-center'>
      <h1 className='font-semibold tracking-wide'>Thanks by Me</h1>
    </footer>
    </div>
    
    
  )
}

export default App



