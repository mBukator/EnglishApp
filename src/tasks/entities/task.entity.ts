import { Entity } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity({name: 'tasks'})
export class Task {
    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    creatorId: string

    @Column({length:30})
    name: string

    @Column({length:200})
    description: string
    //@TO-DO change to work with BD
    @Column()
    membersId: string
}
