import * as yup from "yup";

export const schema = yup.object().shape({
  productName: yup.string().required("Campo obrigatório"),
  category: yup.string().required("Selecione uma opção"),
  description: yup.string().required("Campo obrigatório"),
  condition: yup.string().required("Selecione uma opção"),
  price: yup.number().required("Campo obrigatório"),
});
