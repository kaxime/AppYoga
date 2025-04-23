import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm"
import { User } from "./User"

export type Status = "active" | "cancelled"

@Entity({
    name: "turns"
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column("date")
    date: Date
    
    @Column()
    time: string

    @Column({
        type: "enum",
        enum:["active", "cancelled"],
        default:"active"
    })
    status: Status;

    @ManyToOne(() => User, (user)=> user.appointments)
    user: User; 
}
