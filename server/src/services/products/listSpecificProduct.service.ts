import { database } from "../../app";
import { AppError } from "../../errors/appError";

const listSpecificProductService = async (productId: string) => {
  const productsCollection = database.collection("products");

  const snapshot = await productsCollection.get();

  const products = snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const product = products.filter((product: any) => product.id == productId);

  if (!product) {
    throw new AppError(404, "Product not found");
  }

  return product;
};

export default listSpecificProductService;
