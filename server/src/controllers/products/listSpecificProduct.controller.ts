import listSpecificProductService from "../../services/products/listSpecificProduct.service";
import { Request, Response } from "express";

const listSpecificProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await listSpecificProductService(productId);

  return res.status(200).json(product);
};

export default listSpecificProduct;
