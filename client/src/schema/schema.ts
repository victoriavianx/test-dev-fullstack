import * as yup from "yup";

export const schema = yup.object().shape({
  productName: yup.string().required("Preencha o campo"),
  category: yup.string().required("Selecione uma opção"),
  description: yup.string().required("Preencha o campo"),
  condition: yup.string().required("Selecione uma opção"),
  price: yup.number().required("Digite o preço"),
});
