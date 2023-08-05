import { IUsersRepository } from "../../../infrastructure/repositories/IUsersRepositpory";
import {
    IResponse,
    NotFound,
    MissingMandatoryArgument,
    Created,
} from "../../../infrastructure/server/Response";

// Interface de requisição para criação de um usuário
interface IRequest {
    username: string;
}

// UseCase para adiçao de wins
class AddDefeatUseCase {
    // Realiza a injeçao da dependencia usersRepository
    constructor(private usersRepository: IUsersRepository) {}

    // Método async de execução do UseCase de add Defeats do usuário
    // Informado username e realiza a adção de uma vitória
    async execute({ username }: IRequest): Promise<IResponse> {
        // Se um dos campos obrigatórios não forem informados
        if (!username) {
            return new MissingMandatoryArgument({
                data: {},
                message: "Missing Mandatory Arguments: username",
            });
        }

        // Realiza a consulta se o usuário já existe
        const user = await this.usersRepository.findByUserName(username);

        // Se o usuário nao existe informa que ele não existe
        if (!user) {
            return new NotFound({
                message: "username did not found",
                data: {},
            });
        }

        const userUpdated = await this.usersRepository.updateDefeats(
            username,
            user.defeats + 1
        );

        delete userUpdated.password;

        // Se é valida informa e direciona
        return new Created({ data: userUpdated, message: "Defeat added" });
    }
}

export { AddDefeatUseCase };
