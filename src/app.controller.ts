import { Controller, Get } from '@nestjs/common';
import { AppLogger } from './app.logger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    AppLogger.info('Get Hello from controller');
    return this.appService.getHello();
  }
}
