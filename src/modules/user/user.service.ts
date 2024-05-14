import prisma from "../../utils/prisma";
import { CreateUserInput } from "./user.schema";

const createUser= async(input: CreateUserInput)=>{
    const user = await prisma.user.create({
        data:input,
    })
    return user;
}

const getUsers= async()=>{
    return prisma.user.findMany({
        select:{
            name:true,
            email:true,
        }
    });
}

export {createUser, getUsers}