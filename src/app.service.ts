import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(private readonly logger: PinoLogger) {
    logger.setContext(AppService.name);
  }

  getHello(): string {
    this.logger.info('Get Hello from service');
    return 'Hello World!';
  }
}
