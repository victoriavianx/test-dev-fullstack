import { database } from "../../app";
import { AppError } from "../../errors/appError";

const deleteProductService = async (productId: string) => {
  const productCollection = database.collection("products");

  const product = productCollection.doc(productId);

  if (!product) {
    throw new AppError(404, "Product not found");
  }

  await product.delete();
};

export default deleteProductService;
