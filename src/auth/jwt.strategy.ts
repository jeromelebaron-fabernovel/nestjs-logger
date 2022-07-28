import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PinoLogger } from 'nestjs-pino';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly logger: PinoLogger) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
    this.logger.setContext(JwtStrategy.name);
  }

  async validate(payload: any) {
    this.logger.assign({ userId: payload.sub });
    return { userId: payload.sub, username: payload.username };
  }
}
