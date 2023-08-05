import bcrypt from "bcrypt";

import { IUsersRepository } from "../../../infrastructure/repositories/IUsersRepositpory";
import {
    AlreadyExistsError,
    MissingMandatoryArgument,
    Created,
    IResponse,
} from "../../../infrastructure/server/Response";

// Interface de requisição para criação de um usuário
interface IRequest {
    username: string;
    password: string;
}

// UseCase de criaçao de Usuário
class CreateUserUseCase {
    // Realiza a injeçao da dependencia usersRepository
    constructor(private usersRepository: IUsersRepository) {}

    // Método async de execução do UseCase de criação do usuário
    // Informado username e password realiza a persistência dos dados no db
    async execute({ username, password }: IRequest): Promise<IResponse> {
        // Se um dos campos obrigatórios não forem informados
        if (!(username && password)) {
            return new MissingMandatoryArgument({
                data: {},
                message: "Missing Mandatory Arguments: username aor password",
            });
        }

        // Realiza a consulta se o usuário já existe
        const alreadyExists = await this.usersRepository.findByUserName(
            username
        );

        // Se o usuário já existir informa que ele já existe
        if (alreadyExists) {
            return new AlreadyExistsError({
                message: "username already exists",
                data: {},
            });
        }

        // Realiza a criptografia da senha enviada
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Realiza a inserção própriamente dita do usuário
        const user = await this.usersRepository.create({
            username,
            password: encryptedPassword,
        });

        return new Created({
            message: "Created sucessfully",
            data: user,
        });
    }
}

export { CreateUserUseCase };
