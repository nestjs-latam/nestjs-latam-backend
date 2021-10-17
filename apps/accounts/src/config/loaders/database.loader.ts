import { DatabaseConfig } from '@config/types/lib/database-config.type';
import { registerAs } from '@nestjs/config';
import { configLoader } from './config.loader';

export const databaseLoader = registerAs(
  'database',
  (): DatabaseConfig => configLoader().database
);
