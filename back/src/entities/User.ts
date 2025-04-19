import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100})
    name: string

    @Column()
    email: string

    @Column("date")
    birthdate: Date

    @Column("int")
    nDni: number

    @Column()
    credentials: number
}