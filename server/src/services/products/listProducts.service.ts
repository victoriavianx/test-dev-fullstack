import { database } from "../../app";

const listProductsService = async () => {
  const productsCollection = database.collection("products");

  const snapshot = await productsCollection.get();

  const products = snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products;
};

export default listProductsService;
