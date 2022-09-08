import { useState } from "react";

import DescriptionInfo from "../Description/description";
import ValueInfo from "../Value /value";

import { Container } from "./styles";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Form = () => {
  const [formStep, setformStep] = useState(0);

  const formStepDisplay = () => {
    return formStep === 0 ? <DescriptionInfo /> : <ValueInfo />;
  };

  const nextformStep = () => {
    let next = formStep + 1;

    setformStep(next);
  };

  const previousformStep = () => {
    let previous = formStep - 1;

    setformStep(previous);
  };

  return (
    <Container>
      <h1>Cadastre seu produto</h1>
      <form>{formStepDisplay()}</form>
      <div>
        <button disabled={formStep === 0} onClick={previousformStep}>
          <FiArrowLeft />
        </button>
        <button disabled={formStep === 1} onClick={nextformStep}>
          <FiArrowRight />
        </button>
      </div>
    </Container>
  );
};

export default Form;
