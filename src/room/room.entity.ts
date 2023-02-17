import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  teacherId: number;

  @Column()
  studentId: number;

  @Column()
  maxStudents: number;

  @Column()
  task: string;

}