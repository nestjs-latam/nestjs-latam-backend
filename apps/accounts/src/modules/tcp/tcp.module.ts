import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { NotificationsTcpService } from './services/notifications-tcp.service';
import { notificationsClient } from './clients/notifications.client';

@Module({
  imports: [ClientsModule.registerAsync([notificationsClient])],
  providers: [NotificationsTcpService],
  exports: [NotificationsTcpService]
})
export class TcpModule {}
