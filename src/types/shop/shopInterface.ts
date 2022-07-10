export interface ShopInterface {
  id: string;
  name: string;
  category: string;
  url: string | null;
  address: string;
  lat: number;
  lon: number;
  user_id: string | null;
}