import { Injectable } from '@nestjs/common';
import { Room } from './room.entity';
import { RoomDTO } from './dto/room/room.dto';
import { ROOMS } from 'src/moks/rooms';

@Injectable()
export class RoomService {
  private rooms: Room[] = ROOMS;

  async findAll(): Promise<Room[]> {
    return this.rooms;
  }

  async findOne(id: number): Promise<Room> {
    return this.rooms.find((room) => room._id === id);
  }

  async create(roomDTO: RoomDTO): Promise<Room> {
    const room = new Room();
    room._id = this.rooms.length + 1;
    room.name = roomDTO.name;
    room.description = roomDTO.description;
    room.teacherId = roomDTO.teacherId;
    room.studentId = roomDTO.studentId;
    room.maxStudents = roomDTO.maxStudents;
    room.task = roomDTO.task;
    this.rooms.push(room);
    return room;
  }

  async delete(id: number): Promise<void> {
    const index = this.rooms.findIndex((room) => room._id === id);
    if (index !== -1) {
      this.rooms.splice(index, 1);
    }
  }
}
