import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Question from './pages/Question'

function App2() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/react-tw' element={<Question/>}/>
            </Routes>
        </BrowserRouter>
    )
    
   
}

export default App2



