import listSpecificProductService from "../../services/products/listSpecificProduct.service";
import { Request, Response } from "express";
import { AppError } from "../../errors/appError";

const listSpecificProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await listSpecificProductService(productId);

    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }
  }
};

export default listSpecificProduct;
