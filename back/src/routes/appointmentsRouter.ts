import { Router } from "express";
import { getAllAppointments, getAppointmentsId, postSchedule, putCancel } from "../controllers/appointmentsControllers";

const appointmentsRouter:Router = Router()

appointmentsRouter.get("/appointments", getAllAppointments);
appointmentsRouter.get("/appointments/:id",getAppointmentsId);

appointmentsRouter.post("/appointments/schedule", postSchedule);

appointmentsRouter.put("/appointments/cancel", putCancel);

export default appointmentsRouter
