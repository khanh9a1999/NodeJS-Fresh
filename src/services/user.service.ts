import type { User } from "../types/user.js";
import type { CreateUserInput } from "../schemas/user.schema.js";
import type { IUserRepository } from "../repositories/interfaces/user.repository.js";

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findById(id);
  }

  getFirstUser(): Promise<User | undefined> {
    return this.userRepository.findFirst();
  }

  createUser(input: CreateUserInput): Promise<User> {
    return this.userRepository.create(input);
  }
}
