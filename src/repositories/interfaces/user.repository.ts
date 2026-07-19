import type { User } from "../../types/user.js";
import type { CreateUserInput } from "../../schemas/user.schema.js";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | undefined>;
  findFirst(): Promise<User | undefined>;
  create(input: CreateUserInput): Promise<User>;
}
