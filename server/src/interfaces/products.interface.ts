export interface IProductRequest {
  productName: string;
  description: string;
  category: string;
  condition: string;
  price: number;
}

export interface IProduct extends IProductRequest {
  id?: string;
  created_At: string;
}

export interface IProductToUpdate {
  productName?: string;
  description?: string;
  condition?: string;
  price?: number;
}

export interface IProductUpdate extends IProductToUpdate {
  updated_At: string;
}
