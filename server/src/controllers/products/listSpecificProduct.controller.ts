import listSpecificProductService from "../../services/products/listSpecificProduct.service";
import { Request, Response } from "express";

const listSpecificProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await listSpecificProductService(productId);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
};

export default listSpecificProduct;
