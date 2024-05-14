import { FastifyInstance } from "fastify";
import { registerUserHandler, getUsersHandler } from "./user.controller";
import { $ref } from "./user.schema";

const userRoutes = async (server: FastifyInstance) => {
  server.post("/",{schema:{
    body: $ref("createUserSchema"),
    response:{
      201: $ref("createUserResponseSchema"),
    },
  }},registerUserHandler);

  server.get("/", getUsersHandler);
};

export default userRoutes;