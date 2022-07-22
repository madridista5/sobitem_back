import { Injectable } from "@nestjs/common";
import { RegisterDto } from "./dto/register.dto";
import { User } from "./user.entity";
import { hashPwd } from "../utils/hash-pwd";
import { RegisterUserResponse } from "src/types";

@Injectable()
export class UserService {
  filter(user: User): RegisterUserResponse {
    const { id, email } = user;
    return { id, email };
  }

  async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
    const users = await this.getAllUsers();
    const checkEmail = users.some(user => user.email === newUser.email);
    if (checkEmail) {
      return { id: "", email: "" };
    }

    const user = new User();
    user.email = newUser.email;
    user.pwdHash = hashPwd(newUser.pwd);
    await user.save();

    return this.filter(user);
  }

  async getOneUser(id: string): Promise<User> {
    return await User.findOneOrFail({ where: { id } });
  }

  async getAllUsers(): Promise<User[]> {
    return await User.find();
  }
}
