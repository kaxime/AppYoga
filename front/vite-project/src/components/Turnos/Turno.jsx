

const Turno = ({turno:{time, date, status}}) => {
    return (
        
        <>

            <h4>Turno</h4>
            <div>

                <p>Date: {date} </p>
                <p>time: {time}</p>
                <p>Status: {status} </p>
                <button>Cancelar</button>
            </div>
        
        </>
    )
}

export default Turno;