
import {CreateUserDto}  from "../dto/CreateUserDto"
import {LoginDto} from "../dto/LoginDto"
import { createCredentialsService, loginCredentialsService} from"./credentialsService"
import { User } from "../entities/User";
import { UserModel } from "../config/data-source";
import { Credential } from "../entities/Credential";


export const getAllUsersService = async ():Promise<User[]> => {
    //llama a la db y devuelve todos los usuarios
    const users = await UserModel.find()
    return  users ;
}

export const getUsersIdService = async (id: number): Promise<User> =>{
//encuentra los usuarios por el id 
    
    const user: User | null = await UserModel.findOne({ where:{id}, relations: {credentials:true, appointments:true}})
    if (!user){return Promise.reject("Usuario no encontrado")}

    return user
}

export const postRegisterService = async (user: CreateUserDto): Promise<User> =>{
    // registra a los usuarios con sus credenciales 
    const { password, username } = user;


    const newCredentials : Credential = await  createCredentialsService({ password, username})

    const newUser: User = UserModel.create({
        ...user,
        credentials:newCredentials
    })
    await UserModel.save(newUser);
    return newUser;
}


export const postLoginService =  async (credentials: LoginDto): Promise<any> =>{
    const loginCredentials :Credential = await loginCredentialsService(credentials);

    if(!loginCredentials) throw new Error("")

    const user =await UserModel.findOne({where: {credentials:{id:loginCredentials.id}}})

    return {login: true, user }
}