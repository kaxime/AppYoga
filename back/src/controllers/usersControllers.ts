import { Request, Response } from "express";
import { getAllUsersService, postLoginService, postRegisterService } from "../server/usersService";


export const getAllUsers = async (req: Request , res:Response): Promise<void> =>{
const users = await getAllUsersService();
    res.status(200).json(users);
}



export const postRegisterUser = async (req:Request, res: Response): Promise<void> => {
 const register = await postRegisterService();
    res.status(200).json (register);
}


export const postLoginUser = async (req: Request, res: Response): Promise<void> => {
    const login = await postLoginService();
    res.status(200).json(login)
}