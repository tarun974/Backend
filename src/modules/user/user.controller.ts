import { FastifyReply, FastifyRequest } from "fastify";
import { createUser, getUsers } from "./user.service";
import { CreateUserInput } from "./user.schema";

const registerUserHandler = async (
  request: FastifyRequest<{
    Body: CreateUserInput;
  }>,
  reply: FastifyReply
) => {
  const body = request.body;
  try {
    const user = await createUser(body);
    reply.status(201).send(user);
  } catch (error) {
    console.log(error);
    reply.status(500).send({ message: error });
  }
};

const getUsersHandler= async ()=>{
  const users= await getUsers();
  return users;
}

export { registerUserHandler, getUsersHandler};
