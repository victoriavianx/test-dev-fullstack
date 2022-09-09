import { useState, createContext, useContext } from "react";

interface IFormStepContext {
  formStep: number;
  nextformStep?: () => void;
  previousformStep?: () => void;
}

const defaultValue = {
  formStep: 0,
};

export const FormStepContext = createContext<IFormStepContext>(defaultValue);

export const FormStepProvider = ({ children }: any) => {
  const [formStep, setformStep] = useState(0);

  const nextformStep = () => {
    let next = formStep + 1;

    setformStep(next);
  };

  const previousformStep = () => {
    let previous = formStep - 1;

    setformStep(previous);
  };

  return (
    <FormStepContext.Provider
      value={{ formStep, nextformStep, previousformStep }}
    >
      {children}
    </FormStepContext.Provider>
  );
};

export const useFormStep = () => useContext(FormStepContext);
