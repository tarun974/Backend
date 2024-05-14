import Fastify from "fastify";
import userRoutes from "./modules/user/user.route";
import { userSchemas } from "./modules/user/user.schema";
import { productSchemas } from "./modules/product/product.schema";
import productRoutes from "./modules/product/product.route";

const server = Fastify();

const start = async () => {
  for (const schema of [...userSchemas, ...productSchemas]) {
    server.addSchema(schema);
  }
  server.register(userRoutes, { prefix: "api/users" });
  server.register(productRoutes, { prefix: "api/products" });
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log(`Server is running on port 3000.....`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
