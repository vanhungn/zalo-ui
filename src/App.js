import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Message from './pages/message/message';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/message' element={<Message/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
