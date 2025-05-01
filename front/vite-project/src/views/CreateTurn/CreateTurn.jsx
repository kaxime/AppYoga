import { useContext, useState } from 'react';
import './CreateTurn.css'
import { validateCreateTurn } from '../../helpers/validateCreateTurn';
import { UserContext } from '../../context/UsersContext';

const CreateTurn = () => {

    const {createAppointment} = useContext(UserContext)

    const [formTurn, setFormTurn] = useState({
        date: "",
		time: ""
    })

    const [errors, setErrors] = useState({
        date:"",
        time:"",
    });

    const handleOnChange = (event)=> { 
                console.log(event);
                setFormTurn({
                    ...formTurn, [event.target.name]: event.target.value
                })
                setErrors(validateCreateTurn({ ...formTurn, [event.target.name]: event.target.value}))
            }
    

    const handleOnSubmit = async (event)=> {
        event.preventDefault();
        const newErrors = validateCreateTurn(formTurn);
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    try {
        await createAppointment(formTurn); // ¡Conexión mágica!
        console.log(formTurn);
        alert("¡Cita agendada con éxito!");

        // Limpiar el formulario después de agendar
        setFormTurn({ date: '', time: '' });
        setErrors({});
    } catch (error) {
        // Esto se maneja ya en createAppointment (alert incluido), pero puedes agregar algo aquí si querés
        console.error("Error al agendar:", error);
    }}

    return (
        <div className="form-turn-container">
            <h2 className="form-turn-title">Reservar un turno</h2>

            <form onSubmit={handleOnSubmit} className="form-turn-form">
                <div className="form-turn-group">
                    <label>Fecha:</label>
                    <input
                        type="date"
                        name="date"
                        value={formTurn.date}
                        onChange={handleOnChange}
                        required
                    />
                    {errors.date && <span className="form-turn-error">{errors.date}</span>}
                </div>

                <div className="form-turn-group">
                    <label>Hora:</label>
                    <input
                        type="time"
                        name="time"
                        value={formTurn.time}
                        onChange={handleOnChange}
                        required
                    />
                    {errors.time && <span className="form-turn-error">{errors.time}</span>}
                </div>

                <button type="submit" className="form-turn-button">Solicitar turno</button>
            </form>
        </div>
    );
};
export default CreateTurn;
