import { useContext } from "react"
import { SomeContext } from "../../pages/Question"

function Image({src}){
    const { whatsappFunc } = useContext(SomeContext)
    return (
        <img 
        src={src}
        className='w-9 h-7 border px-2 py-1 rounded-lg  flex-1 flex-grow-0' 
        onClick={whatsappFunc} />
    )
}

export default Image