import { ServerConfig } from '@config/types';
import { registerAs } from '@nestjs/config';

import { configLoader } from './config.loader';

export const notificationsConfigLoader = registerAs('notifications', getValues);

function getValues(): ServerConfig {
  return configLoader().microservices.notifications;
}
