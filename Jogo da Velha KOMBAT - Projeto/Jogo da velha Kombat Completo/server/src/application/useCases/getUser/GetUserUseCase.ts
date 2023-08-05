import bcrypt from "bcrypt";

import { IUsersRepository } from "../../../infrastructure/repositories/IUsersRepositpory";
import {
    NotFound,
    MissingMandatoryArgument,
    Created,
    IResponse,
} from "../../../infrastructure/server/Response";

// Interface de requisição para criação de um usuário
interface IRequest {
    username: string;
}

// UseCase de get do usuário
class GetUserUseCase {
    // Realiza a injeçao da dependencia usersRepository
    constructor(private usersRepository: IUsersRepository) {}

    // Método async de execução do UseCase de get do usuário
    // Informado username e password realiza a persistência dos dados no db
    async execute({ username }: IRequest): Promise<IResponse> {
        // Se um dos campos obrigatórios não forem informados
        if (!username) {
            return new MissingMandatoryArgument({
                data: {},
                message: "Missing Mandatory Arguments: username aor password",
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
        // Retorna o usuário encontrado
        return new Created({
            message: "Found sucessfully",
            data: user,
        });
    }
}

export { GetUserUseCase };
