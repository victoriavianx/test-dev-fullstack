import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/data-source";

export interface IProduct {
  productName: string | undefined;
  category: string | undefined;
  description: string | undefined;
  condition: string | undefined;
  price: number | undefined;
}

interface IProductContext {
  data: {};
  setFormValues?: (data: IProduct) => void;
}

const defaultValue = {
  data: {},
};

export const FormContext = createContext<IProductContext>(defaultValue);

export const FormProvider = ({ children }: any) => {
  const [data, setData] = useState({});

  const setFormValues = (data: IProduct) => {
    setData({ ...data });

    console.log(data);

    api
      .post("/produtos/cadastro", data)
      .then((_) => {
        toast.success("Produto cadastrado!");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
