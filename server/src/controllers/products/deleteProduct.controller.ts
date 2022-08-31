import deleteProductService from "../../services/products/deleteProduct.service";
import { Request, Response } from "express";

const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;

  await deleteProductService(productId);

  return res.status(204).json({
    message: "Product deleted with success",
  });
};

export default deleteProduct;
