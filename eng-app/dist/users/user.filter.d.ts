import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { NoDataExeption } from './user.exeptions';
export declare class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
export declare class NoDataExeptionFilter implements ExceptionFilter {
    catch(exception: NoDataExeption, host: ArgumentsHost): void;
}
