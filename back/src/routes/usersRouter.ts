import { Router } from "express";
import { getAllUsers, getUsersId, postLoginUser, postRegisterUser } from "../controllers/usersControllers";

const usersRouter:Router = Router()

usersRouter.get("/users", getAllUsers );

usersRouter.get("/user/:id", getUsersId);

usersRouter.post("/users/register", postRegisterUser);

usersRouter.post("/users/login", postLoginUser );


export default usersRouter;