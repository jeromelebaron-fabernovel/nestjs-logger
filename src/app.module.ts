import { Module } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
        genReqId: () => randomUUID,
        autoLogging: false,
        messageKey: 'message',
        redact: {
          paths: ['password'],
          censor: '*********',
        },
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
