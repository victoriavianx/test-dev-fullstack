export interface IProductRequest {
  productName: string;
  description: string;
  category: string;
  condition: string;
  price: number;
}

export interface IProduct extends IProductRequest {
  created_At: string;
  updated_At?: string;
}
