import {useNavigate, } from "react-router-dom"
import { useEffect,  useContext } from 'react';
import Turno from "../../components/Turnos/Turno";
import './MisTurnos.css';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UsersContext";

const MisTurnos = () => {
   
    const {getAppointments, userAppointments ,user} = useContext(UserContext)
    const navigate = useNavigate()

    useEffect ( () =>{
        if(user == null ){
            navigate("/login")
        }else {
            getAppointments()

        }
    },[])
 

    return (
        <div className="mis-turnos-container">
            <h1 className="mis-turnos-title">Mis Turnos</h1>
            <div className="turnos-grid">
              {userAppointments?.length ? (
                    userAppointments.map((t) => <Turno key={t.id} turno={t} />)
                ) : (
                    <p>No tenés turnos aún 🧘‍♀️</p>
                )}
            </div>
            <div>
                <Link to="/crearTurnos">
                <button>
                Crear turnos 
                </button>
                </Link>
            </div>
        </div>
    );
};

export default MisTurnos;
