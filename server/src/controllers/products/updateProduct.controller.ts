import updateProductService from "../../services/products/updateProduct.service";
import { Request, Response } from "express";

const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const { productName, description, condition, price } = req.body;
  await updateProductService(
    { productName, description, condition, price },
    productId
  );

  return res.status(200).json({ message: "Product updated with success" });
};

export default updateProduct;
