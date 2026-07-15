import type { User } from "../types/user.js";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
];

export function getUsers(): User[] {
  return users;
}

export function getFirstUser(): User | undefined {
  return users[0];
}
