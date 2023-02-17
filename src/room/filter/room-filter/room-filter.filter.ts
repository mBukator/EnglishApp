import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RoomNotFoundException } from 'src/room/exception/room.exception/room.exception';

@Catch(RoomNotFoundException)
export class RoomNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: RoomNotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response
      .status(HttpStatus.NOT_)
      .json({
        statusCode: HttpStatus.NOT_FOUND,
        message: exception.message,
      });
  }
}
