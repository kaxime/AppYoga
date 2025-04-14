import { Router } from "express";
import { getAllUsers, postLoginUser, postRegisterUser } from "../controllers/usersControllers";

const usersRouter:Router = Router()

usersRouter.get("/users", getAllUsers );

// usersRouter.get("/users/:id",);

usersRouter.post("/users/register", postRegisterUser);

usersRouter.post("/users/login", postLoginUser);


export default usersRouter;