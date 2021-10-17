import { ServerConfig } from '@config/types';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsProviderAsyncOptions, Transport } from '@nestjs/microservices';

import { microservicesConfigLoader } from '../../../config/loaders/microservices.loader';

export const accountsClient: ClientsProviderAsyncOptions = {
  name: 'ACCOUNTS',
  imports: [ConfigModule.forFeature(microservicesConfigLoader)],
  inject: [ConfigService],
  useFactory(configService: ConfigService) {
    const { host, port } = configService.get<ServerConfig>(
      'microservices.accounts'
    );
    return {
      transport: Transport.TCP,
      options: { host, port }
    };
  }
};
