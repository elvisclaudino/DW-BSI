import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../../infrastructure/repositories/IUsersRepositpory";
import {
    MissingMandatoryArgument,
    IResponse,
    NotFound,
    Unauthorized,
    Authorized,
} from "../../../infrastructure/server/Response";

// Interface de requisição para criação de um usuário
interface IRequest {
    username: string;
    password: string;
}

// UseCase de criaçao de Usuário
class LoginUserUseCase {
    // Realiza a injeçao da dependencia usersRepository
    constructor(private usersRepository: IUsersRepository) {}

    // Método async de execução do UseCase de login do usuário
    // Informado username e password realiza a verificaçao
    async execute({ username, password }: IRequest): Promise<IResponse> {
        // Se um dos campos obrigatórios não forem informados
        if (!(username && password)) {
            return new MissingMandatoryArgument({
                data: {},
                message: "Missing Mandatory Arguments: username or password",
            });
        }

        // Realiza a consulta se o usuário já existe
        const user = await this.usersRepository.findByUserName(username);

        // Se o usuário nao exister informa que ele não existe
        if (!user) {
            return new NotFound({
                message: "username did not found",
                data: {},
            });
        }

        // Verifica se a senha é valida
        const validPassword = await bcrypt.compare(password, user.password);

        // Se não é valida informa
        if (!validPassword) {
            return new Unauthorized({
                message:
                    "client request has not been completed because it lacks valid authentication credentials for the requested resource",
                data: {},
            });
        }

        // Deleta a senha para retornar o usuário
        delete user.password;

        // Se é valida informa e direciona
        return new Authorized(user, "Authorized, redirect");
    }
}

export { LoginUserUseCase };
