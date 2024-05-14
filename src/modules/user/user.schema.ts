import { z } from "zod";
import {buildJsonSchemas} from "fastify-zod"

const userCore = {
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email(),
  name: z.string(),
};

const createUserSchema = z.object({
  ...userCore,
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6),
  salt: z.string({
    required_error: "Salt is required",
    invalid_type_error: "Salt must be a string",
  }),
});

const createUserResponseSchema = z.object({
  ...userCore,
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const {schemas: userSchemas, $ref}= buildJsonSchemas({
  createUserSchema,
  createUserResponseSchema
},{$id: "user"});
