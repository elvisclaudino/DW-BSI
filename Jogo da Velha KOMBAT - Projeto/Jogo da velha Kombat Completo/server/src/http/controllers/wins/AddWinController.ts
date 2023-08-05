import { Request, Response } from "express";

import { AddWinUseCase } from "../../../application/useCases/addWin/AddWinUseCase";

class AddWinController {
    constructor(private addWinUseCase: AddWinUseCase) {}

    async handle(request: Request, response: Response) {
        const { username } = request.params;
        // Realiza a execução do método de adição de wins do usuário
        const result = await this.addWinUseCase.execute({
            username,
        });

        // Retorna resposta de acordo com o método de adição de wins ao usuário
        return response
            .status(result.statusCode)
            .json({ message: result.message, data: result.data });
    }
}

export { AddWinController };
