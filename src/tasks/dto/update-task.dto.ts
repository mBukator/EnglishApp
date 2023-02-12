import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    readonly _id: number;
    readonly creatorId: string;
    readonly name: string;
    readonly description: string;
    readonly membersId: number[];
}
