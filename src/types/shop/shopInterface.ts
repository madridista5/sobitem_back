export interface ShopInterface {
  id: string;
  name: string;
  category: string;
  url: string | null;
  address: string;
  lat: number;
  lon: number;
}

export interface SimpleShopEntity {
  id: string,
  lat: number,
  lon: number,
}

export interface ShopEntity extends SimpleShopEntity {
  name: string;
  category: string;
  url: string;
}

export type GetListOfShopsResponse = ShopInterface[];
export type GetOneShopResponse = ShopInterface;