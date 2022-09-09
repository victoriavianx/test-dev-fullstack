import { useFormStep } from "../../providers/formStep/formStep";

import { Container, Input, Select } from "../Description/styles";
import { FiArrowLeft } from "react-icons/fi";

const selectOptions = ["Excelente", "Muito bom", "Bom", "Ruim"];

const ValueInfo = () => {
  const { previousformStep } = useFormStep();

  return (
    <Container>
      <label htmlFor="condition">Condição do Produto</label>
      <Select name="condition" id="condition">
        {selectOptions.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </Select>

      <label htmlFor="price">Preço</label>
      <Input
        type="number"
        id="price"
        placeholder="Qual o valor do seu produto?"
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
    </Container>
  );
};

export default ValueInfo;
