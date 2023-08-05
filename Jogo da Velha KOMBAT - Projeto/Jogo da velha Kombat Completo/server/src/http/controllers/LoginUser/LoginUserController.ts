import { Request, Response } from "express";

import { LoginUserUseCase } from "../../../application/useCases/Auth/LoginUserUseCase";

// Classe do controller do endpoint de login do usuário
class LoginUserController {
    // Realiza a injeção da dependencia do UseCase de login
    constructor(private loginUserUseCase: LoginUserUseCase) {}
    async handle(request: Request, response: Response) {
        // Extrai dados do body da requisição
        const { username, password } = request.body;

        // Realiza a execução do método de login do usuário
        const result = await this.loginUserUseCase.execute({
            username,
            password,
        });

        // Retorna resposta de acordo com o método de criação do usuário
        return response
            .status(result.statusCode)
            .json({ message: result.message, data: result.data });
    }
}

export { LoginUserController };
