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

const selectOptionsCategory = [
  "Artigos Pet",
  "Automóveis",
  "Beleza",
  "Eletrônicos e celulares",
  "Esportes",
  "Música",
  "Moda",
];

const selectOptionsCondition = ["Excelente", "Muito bom", "Bom", "Ruim"];

////

const RegisterInfo = () => {
  const { formStep, nextformStep, previousformStep } = useFormStep();
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IProduct>({ resolver: yupResolver(schema), mode: "all" });

  const submitData = (values: IProduct) => {
    setFormValues?.(values);
  };

  return (
    <Container onSubmit={handleSubmit(submitData)}>
      {formStep === 0 && (
        <>
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
            {selectOptionsCategory.map((value, index) => (
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
            <button disabled={formStep !== 0} onClick={nextformStep}>
              <FiArrowRight />
            </button>
          </div>
        </>
      )}

      {formStep === 1 && (
        <>
          <Label>
            <label htmlFor="condition">Condição do Produto</label>
            {errors?.condition && <p>| {errors.condition.message}</p>}
          </Label>
          <Select id="condition" {...register("condition")}>
            {selectOptionsCondition.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </Select>

          <Label>
            <label htmlFor="price">Preço</label>
            {errors?.price && (
              <p style={{ fontSize: "10px" }}>| {errors.price.message}</p>
            )}
          </Label>
          <Input
            type="number"
            id="price"
            placeholder="Qual o valor do seu produto?"
            {...register("price")}
          />

          <div>
            <button onClick={previousformStep}>
              <FiArrowLeft />
            </button>
            <button
              type="submit"
              style={{
                width: "120px",
                paddingTop: ".25rem",
              }}
            >
              Cadastrar
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default RegisterInfo;
