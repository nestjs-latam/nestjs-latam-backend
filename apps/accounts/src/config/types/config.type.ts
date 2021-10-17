import { ServerConfig } from '@config/types';
import { DatabaseConfig } from '@config/types/lib/database-config.type';

import { MicroservicesConfig } from './microservices-config.type';

export type ConfigType = {
  server: ServerConfig;
  microservices: MicroservicesConfig;
  database: DatabaseConfig;
};
