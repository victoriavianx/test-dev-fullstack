import updateProductService from "../../services/products/updateProduct.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const { productName, description, condition, price } = req.body;

  try {
    await updateProductService(
      { productName, description, condition, price },
      productId
    );

    return res.status(200).json({ message: "Product updated with success" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default updateProduct;
