export interface IProduct {
  productName: string | undefined;
  category: string | undefined;
  description: string | undefined;
  condition: string | undefined;
  price: number | undefined;
}

export interface IListProduct {
  id: string;
  productName: string;
  category: string;
  description: string;
  condition: string;
  price: number;
}

export interface IUpdateProduct {
  productName?: string;
  category?: string;
  description?: string;
  condition?: string;
  price?: number;
}
