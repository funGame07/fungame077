

function Info(){
    function hideButton(e){
        e.target.parentElement.style.display = 'none'
    }

    return(
        <div id="info" className="hidden font-[poppins] max-w-[390px] border-2 h-fit border-slate-950 rounded-md bg-white absolute flex-col justify-center items-center px-4 py-11 top-10 left-5 right-5">
            <p className="font-bold text-4xl mb-8 text-green-700">Selamat Datang</p>
            <p className="font-semibold text-xl mb-5">Silahkan isi kuesioner berikut seputar kurikulum merdeka.</p>
            <p className="font-semibold text-xl mb-8">Isilah sesuai dengan yang kalian alami sendiri...</p>
            <p className="font-semibold text-lg mb-8">Jumlah pertanyaan: 10</p>
            <button onClick={(e) => hideButton(e)} className="max-w-md bg-green-600 px-8 py-1 rounded-lg border font-semibold text-slate-900 border-green-600">Oke</button>
        </div>
    )
}

export default Info
