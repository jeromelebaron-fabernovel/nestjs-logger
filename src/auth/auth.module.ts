import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  imports: [UsersModule],
})
export class AuthModule {}
