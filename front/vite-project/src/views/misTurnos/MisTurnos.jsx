
import { useEffect, useState } from 'react';
import Turno from "../../components/Turnos/Turno";
import axios from "axios"

const MisTurnos = ( )=>{

    const [turno, setTurno] = useState([])
    console.log(turno);
    
    useEffect(() => {
        axios
        .get("http://localhost:3000/appointments")
        .then((res) => setTurno(res.data))
        .catch((error) =>alert(error));
    },[]);

    return (
        <>
            <h1>Los Turnos</h1>

                <div> 
                    {
                    turno.map((turno) => {
                    return <Turno key= {turno.id} turno={turno}/>
                    })}
            </div>

        </>
    )
}

export default MisTurnos;