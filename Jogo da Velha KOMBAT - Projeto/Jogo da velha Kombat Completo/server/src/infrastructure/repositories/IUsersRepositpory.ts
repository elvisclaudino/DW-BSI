import { User } from "../../domain/User";

interface ICreateUserDTO {
    username: string;
    password: string;
}

interface IUsersRepository {
    findByUserName(name: string);
    list(): User[];
    create({ username, password }: ICreateUserDTO): void;
    updateWins(username: string, wins: number);
    updateDefeats(username: string, defeats: number);
}

export { IUsersRepository, ICreateUserDTO };
