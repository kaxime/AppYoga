

import './Turno.css';

const Turno = ({ turno: { time, date, status } }) => {
    return (
        <div className="turno-container">
            <h4 className="turno-title">Turno</h4>
            <div className="turno-details">
                <p className="turno-info"><strong>Fecha:</strong> {date}</p>
                <p className="turno-info"><strong>Hora:</strong> {time}</p>
                <p className={`turno-status ${status.toLowerCase()}`}>Estado: {status}</p>
                <button className="turno-btn">Cancelar</button>
            </div>
        </div>
    );
};

export default Turno;