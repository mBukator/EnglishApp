export declare class UserEntity {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    email: string;
    phone: string;
    password: string;
    hashPassword(): Promise<void>;
}
