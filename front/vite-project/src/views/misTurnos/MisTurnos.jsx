import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import Turno from "../../components/Turnos/Turno";
import axios from "axios";
import './MisTurnos.css';
import CreateTurn from "../CreateTurn/CreateTurn";

const MisTurnos = () => {
    const {id} = useParams()
    const [turno, setTurno] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/user/${id}`)
            .then((res) => setTurno(res.data.appointments))
            .catch((error) => alert(error));
    }, [id]);

    return (
        <div className="mis-turnos-container">
            <h1 className="mis-turnos-title">Mis Turnos</h1>
            <div className="turnos-grid">
              {turno.length ? (
                    turno.map((t) => <Turno key={t.id} turno={t} />)
                ) : (
                    <p>No tenés turnos aún 🧘‍♀️</p>
                )}
            </div>

            <div className="mis-turnos-container">
                <h2 className="mis-turnos-title">Crear Turno</h2>
                <p>Aca puedes crear tu nuevo turno</p>
                <CreateTurn/>
            </div>
        </div>
    );
};

export default MisTurnos;
