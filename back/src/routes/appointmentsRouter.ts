import { Router } from "express";
import { getAllAppointments, getAppointmentsId, postSchedule, putCancel } from "../controllers/appointmentsControllers";

const appointmentsRouter:Router = Router()

appointmentsRouter.get("/appointments", getAllAppointments);
appointmentsRouter.get("/appointment/:id",getAppointmentsId);

appointmentsRouter.post("/appointments/schedule", postSchedule);

appointmentsRouter.put("/appointments/cancel/:id", putCancel);

export default appointmentsRouter
