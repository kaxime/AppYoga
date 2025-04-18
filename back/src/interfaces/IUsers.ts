

export interface IUser  {
    id: number,
    name: string,
    email:string,
    birthdate:Date,
    nDni:number,
    credentials: number
}

export interface ICredentials {
    id:number,
    username:string,
    password:string
}

type Status = "active" | "cancelled"

export interface IAppointments{
    id:number,
    date:Date,
    time:string,
    userId:number,
    status:Status
}

