import * as yup from "yup";

const productSchema = yup.object().shape({
  productName: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  condition: yup.string().required(),
  price: yup.number().required(),
});

export default productSchema;
