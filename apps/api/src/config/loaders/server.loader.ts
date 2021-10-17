import { ServerConfig } from '@config/types';
import { registerAs } from '@nestjs/config';
import { configLoader } from './config.loader';

export const serverConfigLoader = registerAs('server', getValues);

function getValues(): ServerConfig {
  return configLoader().server;
}
