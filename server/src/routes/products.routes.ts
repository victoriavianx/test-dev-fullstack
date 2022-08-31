import { Router } from "express";
import createProduct from "../controllers/products/createProduct.controller";
import deleteProduct from "../controllers/products/deleteProduct.controller";
import listProducts from "../controllers/products/listProducts.controller";
import listSpecificProduct from "../controllers/products/listSpecificProduct.controller";
import updateProduct from "../controllers/products/updateProduct.controller";

const productRoute = Router();

productRoute.post("/cadastro", createProduct);
productRoute.get("/", listProducts);
productRoute.get("/:id", listSpecificProduct);
productRoute.patch("/:id", updateProduct);
productRoute.delete("/:id", deleteProduct);

export default productRoute;
