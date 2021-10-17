import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { accountsClient } from './clients/accounts.client';
import { AccountsTcpService } from './services/accounts-tcp.service';

@Module({
  imports: [ClientsModule.registerAsync([accountsClient])],
  providers: [AccountsTcpService],
  exports: [AccountsTcpService]
})
export class TcpModule {}
