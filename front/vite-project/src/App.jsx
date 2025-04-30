import Home from './views/Home/Home';
import MisTurnos from './views/misTurnos/MisTurnos';
import NavBar from "./components/navBar/NavBar";
import './App.css'
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import { Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/home"element={ <Home/> } />
      <Route path="/login" element={<Login/>} />
      <Route path="/register"  element={<Register/>}  />
      <Route path="/turnos" element={ <MisTurnos/>}  />
    </Routes>
    </>
  )
}

export default App
