import deleteProductService from "../../services/products/deleteProduct.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;

  try {
    await deleteProductService(productId);

    return res.status(204).json({
      message: "Product deleted with success",
    });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default deleteProduct;
