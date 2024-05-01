import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Question from './pages/Question'

function App2() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Question/>}/>
                <Route path='/react-tw/done'></Route>
            </Routes>
        </BrowserRouter>
    )
    
   
}

export default App2



