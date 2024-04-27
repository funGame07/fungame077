
function Input({id, placeholder, type, name}){
    const textClass = 'border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-0 focus:border-b-2 focus:rounded-b-none focus:border-slate-400'
    const radioClass = 'border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'

    return(
        <>
        {type === "radio" && (
            <div className='flex flex-col items-start mt-2 gap-2 mb-3'>
                <div><input type={type} name={name} className={radioClass}/>😃</div>
                <div><input type={type} name={name} className={radioClass}/>😄</div>
                <div><input type={type} name={name} className={radioClass}/>😅</div>
                <div><input type={type} name={name} className={radioClass}/>🖕</div>         
            </div>
        )}

        {type === "text" && (
            <input type={type} 
                id={id} 
                placeholder={placeholder}
                className={textClass}
            />
        )}
        </>
    )
}

Input.defaultProps = {
    id: '',
    name: '',
    placeholder: ''
}

export default Input