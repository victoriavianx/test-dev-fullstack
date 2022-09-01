import { Router } from "express";

import schemaValidation from "../middlewares/schemaValidation.middleware";
import productSchema from "../utils/schemas/product.schema";

import createProduct from "../controllers/products/createProduct.controller";
import deleteProduct from "../controllers/products/deleteProduct.controller";
import listProducts from "../controllers/products/listProducts.controller";
import listSpecificProduct from "../controllers/products/listSpecificProduct.controller";
import updateProduct from "../controllers/products/updateProduct.controller";

const productRoute = Router();

productRoute.post("/cadastro", schemaValidation(productSchema), createProduct);
productRoute.get("/", listProducts);
productRoute.get("/:id", listSpecificProduct);
productRoute.patch("/:id", updateProduct);
productRoute.delete("/:id", deleteProduct);

export default productRoute;
