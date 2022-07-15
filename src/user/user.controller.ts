import { Controller, Post, Body, Inject } from "@nestjs/common";
import { UserService } from './user.service';
import { RegisterDto } from "./dto/register.dto";
import { RegisterUserResponse } from "../types";

@Controller('api/user')
export class UserController {
  constructor(
    @Inject(UserService) private userService: UserService,
    ) {}

  @Post('/register')
  create(@Body() newUser: RegisterDto): Promise<RegisterUserResponse> {
    return this.userService.register(newUser);
  }
}
