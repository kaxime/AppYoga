import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

export type Status = "active" | "cancelled"

@Entity({
    name: "turns"
})

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100})
    name: string

    @Column("date")
    date: Date
    
    @Column()
    time: string
    
    @Column()
    userId: number

    @Column({
        type: "enum",
        enum:["active", "cancelled"],
        default:"active"
    })
    status: Status
}
