import { database } from "../../app";

const deleteProductService = async (productId: string) => {
  const productCollection = database.collection("products");

  const product = productCollection.doc(productId);

  await product.delete();
};

export default deleteProductService;
