import { useContext } from "react"
import { SomeContext } from "../../pages/Question"

function Input({prop: {type, id="", name="", placeholder="", idx}}){
    const {addOption, addAnswer} = useContext(SomeContext)

    const textClass = 'border rounded-md px-2 py-1 text-sm w-2/3 focus:outline-none focus:border-0 focus:border-b-2 focus:rounded-b-none focus:border-slate-400'
    const radioClass = 'border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-0 size-4'
    return(
        <>
        {type === "radio" && (
            <div className='flex flex-col items-start mt-2 gap-2 mb-3'>
                <div><input type={type} name={name} className={radioClass} value='sb' onClick={(e) => addOption(idx, e.target.value)} required/>😃</div>
                <div><input type={type} name={name} className={radioClass} value='b' onClick={(e) => addOption(idx, e.target.value)} required/>😄</div>
                <div><input type={type} name={name} className={radioClass} value='tb' onClick={(e) => addOption(idx, e.target.value)} required/>😅</div>
                <div><input type={type} name={name} className={radioClass} value='stb' onClick={(e) => addOption(idx, e.target.value)} required/>🖕</div>         
            </div>
        )}

        {type === "text" && (
            <input type={type} 
                id={id} 
                placeholder={placeholder}
                className={textClass}
                onChange={addAnswer}
                required
                />
        )}
        </>
    )
}

export default Input