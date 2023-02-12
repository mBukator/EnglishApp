export class CreateTaskDto {
    readonly _id: number;
    readonly creatorId: string;
    readonly name: string;
    readonly description: string;
    readonly membersId: number[];
}
