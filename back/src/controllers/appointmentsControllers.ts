import { Request, Response } from "express";
import { getAllAppointmentsService, postScheduleService, putCancelService } from "../server/appointmentsService";


export const getAllAppointments = async (req: Request, res:Response):Promise<void> => {
    const appointment = await getAllAppointmentsService();
    res.status(200).json(appointment);
};


export const postSchedule = async (req: Request, res:Response):Promise<void> => {
    const schedule = await postScheduleService();
    res.status(200).json(schedule);
};

export const putCancel = async (req: Request, res:Response):Promise<void> => {
    const cancel = await putCancelService();
    res.status(200).json(cancel);
};