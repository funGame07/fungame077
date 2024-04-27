
function Label({id, title}){
    return (
    <label
    htmlFor={id}
    className='text-zinc-700 block font-semibold mb-1'>
        {title}
    </label>
    )
}

export default Label