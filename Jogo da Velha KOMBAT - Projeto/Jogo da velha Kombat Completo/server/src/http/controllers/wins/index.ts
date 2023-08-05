import { AddWinUseCase } from "../../../application/useCases/addWin/AddWinUseCase";
import { UsersRepository } from "../../../infrastructure/repositories/implementations/UsersRepository";
import { AddWinController } from "./AddWinController";

const usersRepository = new UsersRepository();
const addWinUseCase = new AddWinUseCase(usersRepository);
const addWinController = new AddWinController(addWinUseCase);

export { addWinController };
