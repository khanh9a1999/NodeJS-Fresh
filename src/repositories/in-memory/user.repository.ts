import type { User } from "../../types/user.js";
import type { CreateUserInput } from "../../schemas/user.schema.js";
import type { IUserRepository } from "../interfaces/user.repository.js";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
];

let nextId = 2;

export class InMemoryUserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return users;
  }

  async findById(id: number): Promise<User | undefined> {
    return users.find((user) => user.id === id);
  }

  async findFirst(): Promise<User | undefined> {
    return users[0];
  }

  async create(input: CreateUserInput): Promise<User> {
    const user: User = {
      id: nextId++,
      name: input.name,
      email: input.email,
    };
    users.push(user);
    return user;
  }
}
