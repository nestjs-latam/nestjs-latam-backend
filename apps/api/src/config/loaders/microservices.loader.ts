import { registerAs } from '@nestjs/config';
import { MicroservicesConfig } from '../types/microservices-config.type';

import { configLoader } from './config.loader';

export const microservicesConfigLoader = registerAs('microservices', getValues);

function getValues(): MicroservicesConfig {
  return configLoader().microservices;
}
