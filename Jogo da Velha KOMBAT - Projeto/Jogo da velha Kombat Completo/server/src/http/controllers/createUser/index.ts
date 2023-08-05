import { CreateUserUseCase } from "../../../application/useCases/createUser/CreateUserUseCase";
import { UsersRepository } from "../../../infrastructure/repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
