import { User } from "../../user/user.entity";

export class AddShopDto {
  id?: string;
  name: string;
  category: string;
  url?: string;
  address: string;
  user_id: User;
  lat: number;
  lon: number;
}