
function Input({addAnswer, prop: {type, id="", name="", placeholder="", objKey}}){
    const textClass = 'border rounded-md px-2 py-1 text-sm w-2/3 focus:outline-none focus:border-0 focus:border-b-2 focus:rounded-b-none focus:border-slate-400'
    const radioClass = 'border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'
    console.log(placeholder)
    return(
        <>
        {type === "radio" && (
            <div className='flex flex-col items-start mt-2 gap-2 mb-3'>
                <div><input type={type} name={name} className={radioClass} required/>😃</div>
                <div><input type={type} name={name} className={radioClass} required/>😄</div>
                <div><input type={type} name={name} className={radioClass} required/>😅</div>
                <div><input type={type} name={name} className={radioClass} required/>🖕</div>         
            </div>
        )}

        {type === "text" && (
            <input type={type} 
                id={id} 
                placeholder={placeholder}
                className={textClass}
                onChange={(e) => addAnswer(objKey, e.target.value)}
                required
                />
        )}
        </>
    )
}

export default Input