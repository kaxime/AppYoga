import { IAppointments } from "../interfaces/IUsers";

const appointments:IAppointments[] = [
    {
    id: 1,
    date: new Date("2025-04-15"),
    time: "10",
    userId: 1 ,
    status: "active"
    },
    {
    id: 2,
    date: new Date("2025-04-16"),
    time: "14",
    userId: 2 ,
    status: "cancelled"
    }
    ]


export const getAllAppointmentsService = async ():Promise<IAppointments[]> => {

    return await appointments;
};

export const getAppointmentsIdService = async (id: number): Promise<IAppointments> =>{
    
    const turn= appointments.find((turn) => turn.id === id)
    if (!turn){return Promise.reject("turno no encontrado")}
    
    return await turn
}

export const postScheduleService = async ():Promise<string> => {

    return await "se puede agendar un nuevo turno.";
};


export const putCancelService = async ():Promise<string> => {

    return await "Se puede cambiar el estatus de un turno a 'cancelled'";
};