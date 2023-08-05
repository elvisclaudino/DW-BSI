import { PrismaClient } from "@prisma/client";

import { User } from "../../../domain/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepositpory";

const prisma = new PrismaClient();

class UsersRepository implements IUsersRepository {
    async findByUserName(username: string) {
        const user = await prisma.user.findFirst({
            where: {
                username,
            },
        });
        return user;
    }
    list(): User[] {
        throw new Error("Method not implemented.");
    }
    async create({ username, password }: ICreateUserDTO) {
        const user = await prisma.user.create({
            data: {
                username,
                password,
                wins: 0,
                defeats: 0,
            },
        });
        return user;
    }

    async updateWins(username: string, wins: number) {
        const user = await prisma.user.update({
            where: {
                username,
            },
            data: {
                wins,
            },
        });

        return user;
    }

    async updateDefeats(username: string, defeats: number) {
        const user = await prisma.user.update({
            where: {
                username,
            },
            data: {
                defeats,
            },
        });

        return user;
    }
}

export { UsersRepository };
