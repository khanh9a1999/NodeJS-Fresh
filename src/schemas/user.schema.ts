import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.email("Invalid email"),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
