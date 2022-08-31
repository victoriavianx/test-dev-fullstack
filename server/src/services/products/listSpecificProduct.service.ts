import { database } from "../../app";

const listSpecificProductService = async (productId: string) => {
  const productsCollection = await database.collection("products");

  const snapshot = await productsCollection.get();

  const products = snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const product = products.filter((product: any) => product.id == productId);

  return product;
};

export default listSpecificProductService;
