import { FastifyReply, FastifyRequest } from "fastify";
import { createProduct, deleteProduct, getProducts, updateProduct } from "./product.service";
import { CreateProductInput } from "./product.schema";

const createProductHandler= async(request:FastifyRequest<{Body:CreateProductInput}>, reply:FastifyReply)=>{
    const body= request.body;

    try {
        const product= await createProduct(body);
        reply.status(201).send(product);
    } catch (error) {
        console.log(error);
        reply.status(500).send({message:error});
    }
    
}

const getProductsHandler = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const products = await getProducts();
        reply.status(200).send(products);
    } catch (error) {
        console.log(error);
        reply.status(500).send({ message: error });
    }
}

const updateProductsHandler = async(request: FastifyRequest<{Params:{id:string}, Body: CreateProductInput}>, reply: FastifyReply)=>{
    try {
        const productId= parseInt(request.params.id);
        const updatedData= request.body;
        const updatedProduct= await updateProduct(productId,updatedData);

        if(!updatedProduct){
            reply.status(404).send({message:`Product with ${productId} not found`})
        }else{
            reply.status(200).send(updatedProduct);
        }
        reply.status(200).send(updatedProduct);
    } catch (error) {
        console.log(error);
        reply.status(500).send({message:error});
    }
}

const deleteProductHandler= async(request: FastifyRequest<{Params:{id:string}}>, reply: FastifyReply)=>{
    try {
        const productId= parseInt(request.params.id);
        const deletedProduct= await deleteProduct(productId);
        if(!deletedProduct){
            reply.status(404).send({message:`Product with ${productId} not found`});
        }else{
            reply.status(200).send(`Product with ${productId} has been deleted`);
        }
    }catch(error){
        console.log(error);
        reply.status(500).send({message:error});
}
}

export {createProductHandler, getProductsHandler, updateProductsHandler,deleteProductHandler};