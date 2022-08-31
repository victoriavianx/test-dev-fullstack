import { database } from "../../app";

const deleteProductService = async (productId: string) => {
  const productCollection = await database.collection("products");

  await productCollection.doc(productId).delete();
};

export default deleteProductService;
