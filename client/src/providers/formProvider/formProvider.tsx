import { useState, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/data-source";

import { IProduct } from "../../interfaces";
import { toast } from "react-toastify";

interface IProductContext {
  data: {};
  setFormValues?: (data: IProduct) => void;
}

const defaultValue = {
  data: {},
};

const FormContext = createContext<IProductContext>(defaultValue);

export const FormProvider = ({ children }: any) => {
  const [data, setData] = useState({});
  const history = useHistory();

  const setFormValues = (data: IProduct) => {
    setData({ ...data });

    api
      .post("/produtos/cadastro", data)
      .then((_) => {
        toast.success("Produto cadastrado");

        history.push("/");
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
