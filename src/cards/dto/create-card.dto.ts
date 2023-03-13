export class CreateCardDto {
    _id: number;
    readonly creatorId: string;
    readonly taskId: number;
    readonly question: string;
    readonly answer: string;
}
