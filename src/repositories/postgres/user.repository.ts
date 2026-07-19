import { db } from "../../config/database.js";
import type { User } from "../../types/user.js";
import type { CreateUserInput } from "../../schemas/user.schema.js";
import type { IUserRepository } from "../interfaces/user.repository.js";

export class PostgresUserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const result = await db.query<User>("SELECT id, name, email FROM users ORDER BY id");
    return result.rows;
  }

  async findById(id: number): Promise<User | undefined> {
    const result = await db.query<User>("SELECT id, name, email FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }

  async findFirst(): Promise<User | undefined> {
    const result = await db.query<User>("SELECT id, name, email FROM users ORDER BY id LIMIT 1");
    return result.rows[0];
  }

  async create(input: CreateUserInput): Promise<User> {
    const result = await db.query<User>(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email",
      [input.name, input.email],
    );
    return result.rows[0]!;
  }
}
