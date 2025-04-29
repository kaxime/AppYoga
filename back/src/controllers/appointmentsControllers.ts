import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentsIdService, postScheduleService, putCancelService } from "../server/appointmentsService";
import { Appointment } from "../entities/Appointment";
import { TurnDto } from "../dto/AppointmentsDto";


export const getAllAppointments = async (req: Request, res:Response):Promise<void> => {
    try {
        const appointment: Appointment[] = await getAllAppointmentsService();
        res.status(200).json(appointment);
    } catch (error) {
        res.status(404).json({message:"No se encontraron turnos para mostrar"})
    }
};

export const getAppointmentsId = async (req:Request, res: Response):Promise<void> => {
   
   try {
        const { id } = req.params
        const elId = Number(id);
        const result = await getAppointmentsIdService(elId)

        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({message:"No se encontro el id del turno" })
    }
};

export const postSchedule = async (req: Request, res:Response):Promise<void> => {
   try {
         const turn: TurnDto = req.body
        const schedule = await postScheduleService(turn);
        res.status(200).json(schedule);
    
   } catch (error) {
    res.status(400).json({message:"Los datos son incorrectos, intentalo de nuevo" })
   }
};

export const putCancel = async (req: Request, res:Response):Promise<void> => {
    try{
        
        const { id } = req.params
        const elId = Number(id);
        const cancel = await putCancelService(elId);
        res.status(200).json({message:"cancelado con exito", status:cancel});
    }catch (error){
        res.status(404).json({message:String (error)})
    }
};