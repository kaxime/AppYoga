import {  TurnDto } from "../dto/AppointmentsDto";
import { IAppointments } from "../interfaces/IUsers";
import { users } from "./usersService";
// import { AppointmentsDto } from "../dto/AppointmentsDto"
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
    
    const turn = appointments.find((turn) => turn.id === id)
    if (!turn){return Promise.reject("turno no encontrado")}
    
    return await turn
}

export const postScheduleService = async (turnData: TurnDto):Promise<IAppointments> => {
    const {date, time, userId} = turnData;

    const userExists = users.find((user) => user.id === userId);
    if(!userExists){ return Promise.reject("Usuario no encontrado. No se puede asignar el turno")}

    let newId = appointments.length + 1
    const newTurn: IAppointments = {
        id: newId,
        date,
        time,
        userId, 
        status:"active"
    }
    appointments.push(newTurn)
    return newTurn;
};


export const putCancelService = async (id:number):Promise<IAppointments> => {
        
    const turnCancel = appointments.find((turn) => turn.id === id)
    if (!turnCancel){return Promise.reject("Id de turno no encontrado")}

    if (turnCancel.status === "cancelled") { return Promise.reject("El turno ya estaba cancelado");}
    turnCancel.status = "cancelled"
      

     return turnCancel;
};