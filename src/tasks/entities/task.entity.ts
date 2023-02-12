import { Entity } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity({name: 'tasks'})
export class Task {
    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    creatorId: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    membersId: number[]
}
