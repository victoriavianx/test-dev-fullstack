import { database } from "../../app";
import { IProduct, IProductRequest } from "../../interfaces/products.interface";
import { formatDateToISOString } from "../../utils";

const createProductService = async ({
  productName,
  description,
  category,
  condition,
  price,
}: IProductRequest) => {
  const products = await database.collection("products");

  const date = new Date();

  const newProduct: IProduct = {
    productName,
    description,
    category,
    condition,
    price,
    created_At: formatDateToISOString(date),
  };

  await products.add(newProduct);

  return newProduct;
};

export default createProductService;
