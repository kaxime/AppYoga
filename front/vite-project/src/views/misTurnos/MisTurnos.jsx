
import { useEffect, useState } from 'react';
import Turno from "../../components/Turnos/Turno";
import axios from "axios";
import './MisTurnos.css';

const MisTurnos = () => {
    const [turno, setTurno] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/appointments")
            .then((res) => setTurno(res.data))
            .catch((error) => alert(error));
    }, []);

    return (
        <div className="mis-turnos-container">
            <h1 className="mis-turnos-title">Mis Turnos</h1>
            <div className="turnos-grid">
                {turno.length > 0 ? (
                    turno.map((turno) => (
                        <Turno key={turno.id} turno={turno} />
                    ))
                ) : (
                    <p className="sin-turnos">No tenés turnos aún</p>
                )}
            </div>
        </div>
    );
};

export default MisTurnos;
