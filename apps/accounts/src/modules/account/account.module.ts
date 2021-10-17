import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { TcpModule } from '../tcp/tcp.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [EventEmitterModule.forRoot(), TcpModule],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
