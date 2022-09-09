import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface IProduct {
  productName?: string;
  category?: string;
  description?: string;
  condition?: string;
  price?: number;
}

interface IProductContext {
  data: {};
  setData?: Dispatch<SetStateAction<{}>>;
  // setFormValues?: (values: IProduct) => void;
}

const defaultValue = {
  data: {},
};

export const FormContext = createContext<IProductContext>(defaultValue);

export const FormProvider = ({ children }: any) => {
  const [data, setData] = useState({});

  // const setFormValues = (values: IProduct) => {
  //   setData({ data, ...values });
  // };

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);
