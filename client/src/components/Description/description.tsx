import {
  IProduct,
  useFormData,
} from "../../providers/formProvider/formProvider";
import { schema } from "../../schema/schema";

import { useFormStep } from "../../providers/formStep/formStep";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container, Input, Label, Select, Textarea } from "./styles";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const selectOptions = [
  "Artigos Pet",
  "Automóveis",
  "Beleza",
  "Eletrônicos e celulares",
  "Esportes",
  "Música",
  "Moda",
];

const DescriptionInfo = () => {
  const { formStep, nextformStep, previousformStep } = useFormStep();
  const { data, setData } = useFormData();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(schema), mode: "all" });

  const submitData = (values: IProduct) => {
    setData?.(values);
  };

  return (
    <Container onSubmit={handleSubmit(submitData)}>
      <Label>
        <label htmlFor="productName">Nome</label>
        {errors?.productName && <p>| {errors.productName.message}</p>}
      </Label>
      <Input
        type="text"
        id="productName"
        placeholder="Nome do seu produto"
        {...register("productName")}
      />

      <Label>
        <label htmlFor="category">Categoria</label>
        {errors?.category && <p>| {errors.category.message}</p>}
      </Label>
      <Select id="category" {...register("category")}>
        {selectOptions.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </Select>

      <Label>
        <label htmlFor="description">Descrição</label>
        {errors?.description && <p>| {errors.description.message}</p>}
      </Label>
      <Textarea
        id="description"
        maxLength={300}
        placeholder="Descreva seu produto"
        {...register("description")}
      />

      <div>
        <button disabled={formStep === 0} onClick={previousformStep}>
          <FiArrowLeft />
        </button>
        <button disabled={formStep === 1} type="submit">
          <FiArrowRight />
        </button>
      </div>
    </Container>
  );
};

export default DescriptionInfo;
