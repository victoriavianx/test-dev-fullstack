import { Router } from "express";
import createProduct from "../controllers/products/createProduct.controller";
import listProducts from "../controllers/products/listProducts.controller";

const productRoute = Router();

productRoute.post("/cadastro", createProduct);
productRoute.get("/", listProducts);

export default productRoute;
