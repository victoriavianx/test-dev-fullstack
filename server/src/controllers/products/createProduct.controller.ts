import { Request, Response } from "express";
import createProductService from "../../services/products/createProduct.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { productName, description, category, condition, price } = req.body;
    const newProduct = await createProductService({
      productName,
      description,
      category,
      condition,
      price,
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json({
      message: "Falha na requisição",
    });
  }
};

export default createProduct;
