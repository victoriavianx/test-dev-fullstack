import { database } from "../../app";
import {
  IProductToUpdate,
  IProductUpdate,
} from "../../interfaces/products.interface";
import { formatDateToISOString } from "../../utils";

const updateProductService = async (
  { productName, description, condition, price }: IProductToUpdate,
  productId: string
) => {
  const productCollection = database.collection("products");

  const date = new Date();

  const product: IProductUpdate = {
    productName,
    description,
    condition,
    price,
    updated_At: formatDateToISOString(date),
  };

  const productFound = productCollection.doc(productId);

  await productFound.update(product);
};

export default updateProductService;
