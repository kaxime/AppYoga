import { Request, Response } from "express";
import { getAllUsersService, getUsersIdService, postLoginService, postRegisterService } from "../server/usersService";
import { IUser } from "../interfaces/IUsers";


export const getAllUsers = async (req: Request , res:Response): Promise<void> =>{
const users:IUser[] = await getAllUsersService();
    res.status(200).json(users);
};

export const getUsersId = async (req:Request, res: Response): Promise<void> => {
    const { id } = req.params
    const elId = Number(id);
    const result = await getUsersIdService(elId)

    res.status(200).json(result)
};

export const postRegisterUser = async (req:Request, res: Response): Promise<void> => {
    const user = req.body;
    const newRegister = await postRegisterService(user);
    res.status(200).json (newRegister);
};


export const postLoginUser = async (req: Request, res: Response) : Promise<void> => {

        const { username, password } = req.body;
      // Validamos que lleguen los datos
      if (!username || !password) {
        res.status(400).json({ message: "Faltan datos de login" });
        return;
    }

    try {
        const user = await postLoginService({ username, password });
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: "Credenciales inválidas" });
    }
};