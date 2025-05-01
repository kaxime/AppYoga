import { useState } from 'react';
import './CreateTurn.css'
import { validateCreateTurn } from '../../helpers/validateCreateTurn';

const CreateTurn = ({user}) => {

    const [formTurn, setFormTurn] = useState({
        userId:user,
        date: "",
		time: ""
    })

    const [errors, setErrors] = useState({
        username:"",
        password:"",
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

    console.log("Cita enviada:", formTurn);
    alert("¡Cita agendada con éxito!");

    setFormTurn({ date: '', time: '' });
    setErrors({});
    };

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
