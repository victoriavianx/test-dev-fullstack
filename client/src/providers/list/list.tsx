import { useContext, createContext, useState } from "react";

import { IListProduct } from "../../interfaces";

import api from "../../services/data-source";

interface IListProductContext {
  products: Array<[IListProduct]>;
  setProductList?: () => void;
}

const defaultValue = {
  products: [],
};

const ListProductContext = createContext<IListProductContext>(defaultValue);

export const ListProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState([]);

  const setProductList = () => {
    api.get("/produtos").then((response) => {
      const { data } = response;

      setProducts(data);
    });
  };

  return (
    <ListProductContext.Provider value={{ setProductList, products }}>
      {children}
    </ListProductContext.Provider>
  );
};

export const useList = () => useContext(ListProductContext);
