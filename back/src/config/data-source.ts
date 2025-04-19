import { DataSource } from "typeorm"
import { User } from "../entities/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "pm3_proyect",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})