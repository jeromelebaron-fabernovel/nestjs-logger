import { Module } from '@nestjs/common';
import { ROARR } from 'roarr';
import { AppController } from './app.controller';
import { AppService } from './app.service';

ROARR.write = (message) => {
  console.log(JSON.parse(message));
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
