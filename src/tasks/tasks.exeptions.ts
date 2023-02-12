import { HttpException, HttpStatus } from "@nestjs/common";

export class NoDataExeption extends HttpException {
    constructor() {
        super('data was not loaded, please restart page', 500)
    }
}