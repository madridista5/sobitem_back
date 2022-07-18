import { User } from "../../user/user.entity";

export class AddShopDto {
  name: string;
  category: string;
  url?: string;
  address: string;
  user_id: User;
  lat: number;
  lon: number;
}