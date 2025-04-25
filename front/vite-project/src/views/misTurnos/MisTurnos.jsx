import misTurnos from "../../helpers/myAppoitments";
import { useState } from 'react';
import Turno from "../../components/Turnos/Turno";

const MisTurnos = ( )=>{

    const [turno] = useState(misTurnos)
    console.log(turno);
    

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