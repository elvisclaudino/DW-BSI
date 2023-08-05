import { GetUserUseCase } from "../../../application/useCases/getUser/GetUserUseCase";
import { UsersRepository } from "../../../infrastructure/repositories/implementations/UsersRepository";
import { GetUserController } from "./getUserController";

const usersRepository = new UsersRepository();
const getUserUseCase = new GetUserUseCase(usersRepository);
const getUserController = new GetUserController(getUserUseCase);

export { getUserController };
