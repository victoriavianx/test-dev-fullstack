import { useFormStep } from "../../providers/formStep/formStep";

import DescriptionInfo from "../Description/description";
import ValueInfo from "../Value /value";

import { Container } from "./styles";

const Form = () => {
  const { formStep } = useFormStep();

  const formStepDisplay = () => {
    return formStep === 0 ? <DescriptionInfo /> : <ValueInfo />;
  };

  return (
    <Container>
      <h1>Cadastre seu produto</h1>
      <div>{formStepDisplay()}</div>
    </Container>
  );
};

export default Form;
