import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly logger: PinoLogger,
  ) {
    this.logger.setContext(AuthService.name);
  }

  async login(login: string, password: string): Promise<any> {
    this.logger.info(`Trying to log ${login}`);
    const foundUser = await this.usersService.findOne(login);
    if (foundUser && password === foundUser.password) {
      const { password, ...result } = foundUser;
      return result;
    }
    return null;
  }
}
