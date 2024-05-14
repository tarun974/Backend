import { FastifyInstance } from "fastify";
import {
  createProductHandler,
  deleteProductHandler,
  getProductsHandler,
  updateProductsHandler,
} from "./product.controller";
import { $ref } from "./product.schema";

const productRoutes = async (server: FastifyInstance) => {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createProductSchema"),
        response: {
          201: $ref("productResponseSchema"),
        },
      },
    },
    createProductHandler
  );

  server.get(
    "/",
    {
      schema: {
        response: {
          200: $ref("productsResponseSchema"),
        },
      },
    },
    getProductsHandler
  );

  server.put("/:id", updateProductsHandler);

  server.delete("/:id", deleteProductHandler);
};

export default productRoutes;
