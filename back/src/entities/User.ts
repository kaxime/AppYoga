import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"

@Entity({
    name: "users"
})

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100, nullable: false})
    name: string

    @Column()
    email: string

    @Column("date")
    birthdate: Date

    @Column("int")
    nDni: number

    @OneToOne(()=>Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(()=>Appointment, (appointment)=>appointment.user )
    appointments:Appointment[];
}
