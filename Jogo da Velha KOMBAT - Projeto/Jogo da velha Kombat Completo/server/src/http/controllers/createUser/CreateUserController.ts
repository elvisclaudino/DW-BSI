import { Request, Response } from "express";

import { CreateUserUseCase } from "../../../application/useCases/createUser/CreateUserUseCase";

// Classe do controller do endpoint de criação de usuário
class CreateUserController {
    // Realiza a injeção da dependencia do UseCase de criação
    constructor(private createUserUseCase: CreateUserUseCase) {}
    async handle(request: Request, response: Response) {
        // Extrai dados do body da requisição
        const { username, password } = request.body;

        // Realiza a execução do método de criação do usuário
        const result = await this.createUserUseCase.execute({
            username,
            password,
        });

        // Retorna resposta de acordo com o método de criação do usuário
        return response
            .status(result.statusCode)
            .json({ message: result.message, data: result.data });
    }
}

export { CreateUserController };
