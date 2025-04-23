import { resolveTripleslashReference } from "typescript";
import {  TurnDto } from "../dto/AppointmentsDto";
import { IAppointments } from "../interfaces/IUsers";
import { getUsersIdService } from "./usersService";
import { AppointmentModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

// import { AppointmentsDto } from "../dto/AppointmentsDto"


export const getAllAppointmentsService = async ():Promise<Appointment[]> => {
    const appointments = await AppointmentModel.find()
    return await appointments;
};

export const getAppointmentsIdService = async (id: number): Promise<Appointment | null> =>{
    
    const turn = await AppointmentModel.findOneBy({id})
    if(!turn){Promise.reject("Turno no encontrado")}
    return  turn
}

export const postScheduleService = async (turnData: TurnDto):Promise<Appointment> => {
    const {userId, ...rest} = turnData;

    const userExist = await getUsersIdService(userId)
    if(!userExist){ return Promise.reject("Usuario no encontrado. No se puede asignar el turno")}

    let newAppointments: Appointment = AppointmentModel.create({
        ...rest,
        user: userExist
    })
    await AppointmentModel.save(newAppointments)
    return newAppointments;
};


export const putCancelService = async (id:number):Promise<Appointment> => {
        
    const turnCancel: Appointment | null = await AppointmentModel.findOneBy({id: id});

    if (!turnCancel){return Promise.reject("Id de turno no encontrado");}

    if (turnCancel.status === "cancelled") { return Promise.reject("El turno ya estaba cancelado");}
    turnCancel.status = "cancelled";
    
    await AppointmentModel.save(turnCancel);
    return turnCancel;
};