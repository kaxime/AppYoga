import { Request, Response } from "express";
import { getAllAppointmentsService, getAppointmentsIdService, postScheduleService, putCancelService } from "../server/appointmentsService";


export const getAllAppointments = async (req: Request, res:Response):Promise<void> => {
    const appointment = await getAllAppointmentsService();
    res.status(200).json(appointment);
};

export const getAppointmentsId = async (req:Request, res: Response):Promise<void> => {
    const { id } = req.params
    const elId = Number(id);
    const result = await getAppointmentsIdService(elId)

    res.status(200).json(result)
};

export const postSchedule = async (req: Request, res:Response):Promise<void> => {
    const schedule = await postScheduleService();
    res.status(200).json(schedule);
};

export const putCancel = async (req: Request, res:Response):Promise<void> => {
    const cancel = await putCancelService();
    res.status(200).json(cancel);
};