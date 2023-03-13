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

    @Column({length:500})
    description: string

    @Column()
    membersId: string
}
