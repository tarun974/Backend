import { CreateProductInput } from "./product.schema";
import prisma from "../../utils/prisma";

const createProduct = async (input: CreateProductInput) => {
  // Create a new product
  const product = await prisma.product.create({
    data: input,
  });

  return product;
};

const getProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const updateProduct = async (productId:number, updatedData: CreateProductInput) => {
  // Update a product
  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data: updatedData,
  });

  return updatedProduct;
};

const deleteProduct= async(productId:number)=>{
    //Delete a product
    try{
        const deleteProduct= await prisma.product.delete({
            where:{
                id: productId
            }
        })
        return deleteProduct;
    }
    catch(error){
        console.log(error);
        return null;
    }

}

export { createProduct, getProducts, updateProduct, deleteProduct };
