import { PostgresUserRepository } from "./repositories/postgres/user.repository.js";
import { UserService } from "./services/user.service.js";

const userRepository = new PostgresUserRepository();

export const userService = new UserService(userRepository);
