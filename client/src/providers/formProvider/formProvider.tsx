import { useState, createContext, useContext } from "react";

export interface IProduct {
  productName: string;
  category: string;
  description: string;
  condition: string;
  price: number;
}

interface IProductContext {
  data: {};
  setFormValues?: (values: IProduct) => void;
}

const defaultValue = {
  data: {},
};

export const FormContext = createContext<IProductContext>(defaultValue);

export const FormProvider = ({ children }: any) => {
  const [data, setData] = useState({});

  const setFormValues = (values: IProduct) => {
    setData({ ...values });
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
