import Home from './views/Home/Home';
import MisTurnos from './views/misTurnos/MisTurnos';
import NavBar from "./components/navBar/NavBar";
import ErrorPage from './components/errorPage/ErrorPage';
import './App.css'
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import { Routes, Route } from 'react-router-dom';
import CreateTurn from './views/CreateTurn/CreateTurn';
import YogaSecrets from './components/yoga/YogaSecrets';



function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/"element={ <Home/> } />
      <Route path="/login" element={<Login/>} />
      <Route path="/register"  element={<Register/>}  />
      <Route path="/turnos" element={ <MisTurnos/>}  />
      <Route path='/crearTurnos' element= {<CreateTurn/>}/>
      <Route path="/yoga" element={ <YogaSecrets/>}  />
      <Route path="*" element={<ErrorPage/>}  />
    </Routes>
    </>
  )
}

export default App
