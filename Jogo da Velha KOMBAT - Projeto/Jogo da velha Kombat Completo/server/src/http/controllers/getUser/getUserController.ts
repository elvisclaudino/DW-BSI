import { Request, Response } from "express";

import { GetUserUseCase } from "../../../application/useCases/getUser/GetUserUseCase";

// Classe do controller do endpoint de criação de usuário
class GetUserController {
    // Realiza a injeção da dependencia do UseCase de coleta de dados do usuários
    constructor(private getUserUseCase: GetUserUseCase) {}
    async handle(request: Request, response: Response) {
        // Extrai dados do body da requisição
        const { username } = request.params;

        // Realiza a execução do método de criação do usuário
        const result = await this.getUserUseCase.execute({
            username,
        });

        // Retorna resposta de acordo com o método de criação do usuário
        return response
            .status(result.statusCode)
            .json({ message: result.message, data: result.data });
    }
}

export { GetUserController };
