export interface ProductInterface {
  id: string;
  name: string;
  price: number;
  count: number;
  description: string | null;
  shop_id: string;
}

export type GetListOfProductsResponse = ProductInterface[];
export type GetOneProductResponse = ProductInterface;