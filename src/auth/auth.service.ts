import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PinoLogger } from 'nestjs-pino';
import { UsersService } from 'src/users/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly logger: PinoLogger,
    private readonly jwtService: JwtService,
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

  async loginWithJWT(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
      }),
    };
  }
}
