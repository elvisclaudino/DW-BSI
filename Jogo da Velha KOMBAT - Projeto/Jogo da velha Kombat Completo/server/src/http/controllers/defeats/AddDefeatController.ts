import { Request, Response } from "express";

import { AddDefeatUseCase } from "../../../application/useCases/addDefeat/AddDefeatUseCase";

class AddDefeatController {
    constructor(private addDefeatUseCase: AddDefeatUseCase) {}

    async handle(request: Request, response: Response) {
        const { username } = request.params;
        // Realiza a execução do método de adição de Defeats do usuário
        const result = await this.addDefeatUseCase.execute({
            username,
        });

        // Retorna resposta de acordo com o método de adição de Defeats ao usuário
        return response
            .status(result.statusCode)
            .json({ message: result.message, data: result.data });
    }
}

export { AddDefeatController };
