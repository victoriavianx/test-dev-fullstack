import { database } from "../../app";
import { AppError } from "../../errors/appError";
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

  if (!productFound) {
    throw new AppError(404, "Product not found");
  }

  await productFound.update(product);
};

export default updateProductService;
