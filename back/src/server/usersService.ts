import { IUser, ICredentials } from "../interfaces/IUsers";
import {CreateUserDto}  from "../dto/CreateUserDto"
import {LoginDto} from "../dto/LoginDto"
import { createCredentialsService, loginCredentialsService} from"./credentialsService"

export const users: IUser[] = [
{
    id: 1,
    name: "Sofía Ramírez",
    email: "sofia.ramirez@example.com",
    birthdate: new Date("1990-06-21"),
    nDni: 12345678,
    credentials: 1
},
{
    id: 2,
    name: "Carlos Gómez",
    email: "carlos.gomez@example.com",
    birthdate: new Date("1985-11-12"),
    nDni: 87654321,
    credentials: 2
},
{
    id: 3,
    name: "Lucía Fernández",
    email: "lucia.fernandez@example.com",
    birthdate: new Date("1995-03-04"),
    nDni: 11223344,
    credentials: 3 
}
];


export const getAllUsersService = async ():Promise<IUser[]> => {
    //llama a la db y devuelve todos los usuarios
    return await users ;
}

export const getUsersIdService = async (id: number): Promise<IUser> =>{

    const user = users.find((user) => user.id === id)
    if (!user){return Promise.reject("Usuario no encontrado")}

    return await user
}

export const postRegisterService = async (user: CreateUserDto): Promise<IUser> =>{
    const { password, username } = user;
    let id: number  = users.length + 1


    const newCredentials : number = await  createCredentialsService({
        password, username
    })


    const newUser: IUser = {
        id,
        credentials: newCredentials,
        ...user
    };
    users.push(newUser)
    return await newUser;
}


export const postLoginService =  async (user: LoginDto): Promise<IUser> =>{
    const { username, password} = user;

    const credentialsId = await loginCredentialsService(username, password);
    
    const foundUser = users.find((u) => u.credentials === credentialsId); 
    if (!foundUser) {
        return Promise.reject("Usuario no encontrado");
    }

    return await foundUser
}