export interface ProductInterface {
  id: string;
  name: string;
  price: number;
  count: number;
  description: string | null;
}

export interface ProductEntity {
  id: string,
  name: string,
  price: number,
  description: string;
  shop_id: string;
}

export interface SimplyProductEntity extends Omit<ProductEntity, 'description' | 'shop_id'> {}

export type GetListOfProductsResponse = ProductInterface[];
export type GetOneProductResponse = ProductInterface;