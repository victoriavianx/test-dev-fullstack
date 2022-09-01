import listProductsService from "../../services/products/listProducts.service";
import { Request, Response } from "express";

const listProducts = async (req: Request, res: Response) => {
  try {
    const products = await listProductsService();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({
      message: "Request failed",
    });
  }
};

export default listProducts;
