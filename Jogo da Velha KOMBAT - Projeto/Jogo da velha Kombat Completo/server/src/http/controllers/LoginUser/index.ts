import { LoginUserUseCase } from "../../../application/useCases/Auth/LoginUserUseCase";
import { UsersRepository } from "../../../infrastructure/repositories/implementations/UsersRepository";
import { LoginUserController } from "./LoginUserController";

const usersRepository = new UsersRepository();
const loginUserUseCase = new LoginUserUseCase(usersRepository);
const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController };
