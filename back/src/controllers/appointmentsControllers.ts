import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentsIdService, postScheduleService, putCancelService } from "../server/appointmentsService";
import { Appointment } from "../entities/Appointment";
import { TurnDto } from "../dto/AppointmentsDto";


export const getAllAppointments = async (req: Request, res:Response):Promise<void> => {
    const appointment: Appointment[] = await getAllAppointmentsService();
    res.status(200).json(appointment);
};

export const getAppointmentsId = async (req:Request, res: Response):Promise<void> => {
    const { id } = req.params
    const elId = Number(id);
    const result = await getAppointmentsIdService(elId)

    res.status(200).json(result)
};

export const postSchedule = async (req: Request, res:Response):Promise<void> => {
    const turn: TurnDto = req.body
    const schedule = await postScheduleService(turn);
    res.status(200).json(schedule);
};

export const putCancel = async (req: Request, res:Response):Promise<void> => {
    try{
        
        const { id } = req.params
        const elId = Number(id);
        const cancel = await putCancelService(elId);
        res.status(200).json({message:"cancelado con exito", status:cancel});
    }catch (error){
        res.status(400).json({message:String (error)})
    }
};