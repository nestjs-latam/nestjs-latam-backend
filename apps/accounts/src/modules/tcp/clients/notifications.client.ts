import { ServerConfig } from '@config/types';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices';

import { notificationsConfigLoader } from '../../../config/loaders/notifications.loader';

export const notificationsClient: ClientsProviderAsyncOptions = {
  name: 'NOTIFICATIONS',
  imports: [ConfigModule.forFeature(notificationsConfigLoader)],
  inject: [ConfigService],
  useFactory(configService: ConfigService) {
    const { host, port } = configService.get<ServerConfig>('notifications');
    return {
      transport: Transport.TCP,
      options: { host, port }
    };
  }
};
