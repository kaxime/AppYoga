import { Request, Response } from "express";
import { getAllUsersService, getUsersIdService, postLoginService, postRegisterService } from "../server/usersService";
import { User } from "../entities/User";
import { CreateUserDto } from "../dto/CreateUserDto";
import { LoginDto } from "../dto/LoginDto";


export const getAllUsers = async (req: Request , res:Response): Promise<void> =>{
const users:User[] = await getAllUsersService();
    res.status(200).json(users);
    // res.status(400).json({message:"No hay usuarios para mostrar"})
};

export const getUsersId = async (req:Request, res: Response): Promise<void> => {
    
    try{const { id } = req.params
    const elId = Number(id);
    const user = await getUsersIdService(elId)

    res.status(200).json(user)
    } catch(e){
    res.status(404).json({message:"no se encontro el id" })
    }
};

export const postRegisterUser = async (req:Request, res: Response): Promise<void> => {
    const user:CreateUserDto = req.body;
    const newRegister = await postRegisterService(user);
    res.status(200).json (newRegister);
    
};


export const postLoginUser = async (req: Request, res: Response) : Promise<void> => {

        const credentials: LoginDto = req.body;
      // Validamos que lleguen los datos
        if (!credentials) {
        res.status(400).json({ message: "Faltan datos en el login" });
        return;
    }

    try {
        const user = await postLoginService(credentials);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: "Credenciales inválidas" });
    }
};