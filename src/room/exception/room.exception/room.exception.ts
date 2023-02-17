import { HttpException, HttpStatus } from '@nestjs/common';

export class RoomNotFoundException extends HttpException {
  constructor(roomId: number) {
    super(`Room with id ${roomId} not found`, HttpStatus.NOT_FOUND);
  }
}
