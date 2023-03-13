import { Entity } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity({name: 'cards'})
export class Card {
    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    creatorId: string

    @Column()
    taskId: number

    @Column({length:150})
    question: string
    
    @Column({length:50})
    answer: string
}
