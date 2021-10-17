import { Module } from '@nestjs/common';

import { TcpModule } from '../tcp/tcp.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [TcpModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
