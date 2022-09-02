import deleteProductService from "../../services/products/deleteProduct.service";
import { NextFunction, Request, Response } from "express";

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    await deleteProductService(productId);

    return res.status(204).json();
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
};

export default deleteProduct;
