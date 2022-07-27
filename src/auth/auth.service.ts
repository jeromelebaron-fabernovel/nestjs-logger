import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(login: string, password: string): Promise<any> {
    const foundUser = await this.usersService.findOne(login);
    if (foundUser && password === foundUser.password) {
      const { password, ...result } = foundUser;
      return result;
    }
    return null;
  }
}
