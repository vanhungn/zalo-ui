import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Message from './pages/message/message';
import Login from './pages/login/login';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/message' element={<Message/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
