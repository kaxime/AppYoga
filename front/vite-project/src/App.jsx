import Home from './views/Home/Home';
import MisTurnos from './views/misTurnos/MisTurnos';
import NavBar from "./components/navBar/NavBar";
import './App.css'
import Register from './views/Register/Register';
import Login from './views/Login/Login';


function App() {
 

  return (
    <>
    <NavBar/>
      {/* <Home/> */}
      {/* <MisTurnos/> */}
      <Register/>
      <Login/>
    </>
  )
}

export default App
