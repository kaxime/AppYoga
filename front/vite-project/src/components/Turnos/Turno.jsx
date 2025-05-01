
import './Turno.css';
import { useContext } from "react";
import { UserContext } from '../../context/UsersContext'; // revisá la ruta

const Turno = ({ turno: { id, time, date, status } }) => {
    const { cancelAppointment } = useContext(UserContext);

    return (
        <div className="turno-container">
            <h4 className="turno-title">Turno</h4>
            <div className="turno-details">
                <p className="turno-info"><strong>Fecha:</strong> {date}</p>
                <p className="turno-info"><strong>Hora:</strong> {time}</p>
                <p className="turno-status">Estado: {status}</p>
                <button className="turno-btn" onClick={() => cancelAppointment(id)}>
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default Turno;
