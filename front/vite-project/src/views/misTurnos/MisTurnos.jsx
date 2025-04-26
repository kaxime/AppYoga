
import { useEffect, useState } from 'react';
import Turno from "../../components/Turnos/Turno";
import axios from "axios"

const MisTurnos = ( )=>{

    const [turno, setTurnos] = useState([])
    console.log([]);
    
    useEffect(() => {
        axios.get("http://localhost:3000/appointments")
        // .then((response) =>response.json())
        .then((res) => setTurnos(res.data))
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