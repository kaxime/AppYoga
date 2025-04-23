import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { Appointment } from "../entities/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "pm3_proyect",
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})
export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)
export const AppointmentModel = AppDataSource.getRepository(Appointment)