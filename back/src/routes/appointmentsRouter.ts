import { Router } from "express";
import { getAllAppointments, postSchedule, putCancel } from "../controllers/appointmentsControllers";

const appointmentsRouter:Router = Router()

appointmentsRouter.get("/appointments", getAllAppointments);
//appointmentsRouter.get("/appointments/:id",);

appointmentsRouter.post("/appointments/schedule", postSchedule);

appointmentsRouter.put("/appointments/cancel", putCancel);

export default appointmentsRouter
