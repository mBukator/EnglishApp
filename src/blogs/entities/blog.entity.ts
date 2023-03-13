import { Entity } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity({name: 'blogs'})
export class Blog {
    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    creatorId: string

    @Column({length:100})
    name: string

    @Column({length:200})
    description: string
    
    @Column()
    content: string
}
