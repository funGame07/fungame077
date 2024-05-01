import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Question from './pages/Question'
import Done from './Done'

function App2() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/react-tw' element={<Question/>}/>
                <Route path='/react-tw/done' element={<Done/>}/>
            </Routes>
        </BrowserRouter>
    )
    
   
}

export default App2



