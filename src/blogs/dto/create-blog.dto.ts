export class CreateBlogDto {
    readonly _id: number;
    readonly creatorId: string;
    readonly name: string;
    readonly description: string;
    readonly content: string;
}
