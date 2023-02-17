import { Controller, Get, Post, Body, Param, Delete, UseFilters } from '@nestjs/common';
import { Room } from './room.entity';
import { RoomDTO } from './dto/room/room.dto';
import { RoomService } from './room.service';
import { RoomNotFoundException } from './exception/room.exception/room.exception';
import { RoomNotFoundExceptionFilter } from './filter/room-filter/room-filter.filter';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async findAll(): Promise<RoomDTO[]> {
    const rooms: Room[] = await this.roomService.findAll();
    return rooms.map(room => new RoomDTO(room));
  }

  @Get(':id')
  @UseFilters(RoomNotFoundExceptionFilter)
  async findOne(@Param('id') id: number): Promise<RoomDTO> {
    try {
      const room: Room = await this.roomService.findOne(+id);
      return new RoomDTO(room);
    } catch (error) {
      throw new RoomNotFoundException(+id);
    }
  }

  @Post()
  async create(@Body() roomDTO: RoomDTO): Promise<RoomDTO> {
    const room: Room = await this.roomService.create(roomDTO);
    return new RoomDTO(room);
  }

  @Delete(':id')
  @UseFilters(RoomNotFoundExceptionFilter)
  async delete(@Param('id') id: number): Promise<void> {
    try {
      await this.roomService.delete(+id);
    } catch (error) {
      throw new RoomNotFoundException(+id);
    }
  }
}