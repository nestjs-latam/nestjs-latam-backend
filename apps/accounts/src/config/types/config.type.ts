import { ServerConfig } from '@config/types';

import { MicroservicesConfig } from './microservices-config.type';

export type ConfigType = {
  server: ServerConfig;
  microservices: MicroservicesConfig;
};
