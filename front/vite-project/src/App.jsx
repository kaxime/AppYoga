import Home from './views/Home/Home';
import MisTurnos from './views/misTurnos/MisTurnos';
import NavBar from "./components/navBar/NavBar";
import './App.css'
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import { Routes, Route } from 'react-router-dom';
import CreateTurn from './views/CreateTurn/CreateTurn';


function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/home"element={ <Home/> } />
      <Route path="/login" element={<Login/>} />
      <Route path="/register"  element={<Register/>}  />
      <Route path="/turnos/:id" element={ <MisTurnos/>}  />
      <Route path="*" element={""}  />
    </Routes>
    </>
  )
}

export default App
