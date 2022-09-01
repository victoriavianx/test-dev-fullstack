import listSpecificProductService from "../../services/products/listSpecificProduct.service";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

const listSpecificProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;

  try {
    const product = await listSpecificProductService(productId);

    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default listSpecificProduct;
