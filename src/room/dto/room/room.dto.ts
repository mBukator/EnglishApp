import { Room } from "src/room/room.entity";

export class RoomDTO {
    _id: number;
    name: string;
    description: string;
    teacherId: number;
    studentId: number;
    maxStudents: number;
    task: string;
  
    constructor(room: Room) {
      this._id = room._id;
      this.name = room.name;
      this.description = room.description;
      this.teacherId = room.teacherId;
      this.studentId = room.studentId;
      this.maxStudents = room.maxStudents;
      this.task = room.task;
    }
}
  