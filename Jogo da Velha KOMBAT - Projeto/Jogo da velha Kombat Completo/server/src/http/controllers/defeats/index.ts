import { AddDefeatUseCase } from "../../../application/useCases/addDefeat/AddDefeatUseCase";
import { UsersRepository } from "../../../infrastructure/repositories/implementations/UsersRepository";
import { AddDefeatController } from "./AddDefeatController";

const usersRepository = new UsersRepository();
const addDefeatUseCase = new AddDefeatUseCase(usersRepository);
const addDefeatController = new AddDefeatController(addDefeatUseCase);

export { addDefeatController };
