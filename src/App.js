//import './App.css';
import Home from './components/Home';
import Forms from './components/Forms';
import ListaForms from './components/ListaForms';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/forms" element={<Forms/>} />
        <Route path="/listaforms" element={<ListaForms/>} />
      </Routes>
  
    </BrowserRouter>

  );
}

export default App;
