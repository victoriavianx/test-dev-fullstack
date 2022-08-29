import { database } from "../../app";
import { IProduct, IProductRequest } from "../../interfaces/products.interface";

const createProductService = async ({
  productName,
  description,
  category,
  condition,
  price,
}: IProductRequest) => {
  const products = await database.collection("products");

  const date = new Date();

  const dateISOFormat = date.toISOString();

  const newProduct: IProduct = {
    productName,
    description,
    category,
    condition,
    price,
    created_At: dateISOFormat,
  };

  await products.add(newProduct);

  return newProduct;
};

export default createProductService;
