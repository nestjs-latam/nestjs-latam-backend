import { ServerConfig } from '@config/types';
import { JwtConfig } from '@core/dtos/jwt/jwt-config.dto';

import { MicroservicesConfig } from './microservices-config.type';

export type ConfigType = {
  server: ServerConfig;
  microservices: MicroservicesConfig;
  jwt: JwtConfig;
};
