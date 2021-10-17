import { join } from 'path';
import { ConfigModuleOptions } from '@nestjs/config';
import { configSchema } from './config.schema';
import { serverConfigLoader } from './loaders/server.loader';

export const configModuleOptions: ConfigModuleOptions = {
  envFilePath: join(__dirname.replace(/\/dist/, ''), '.env'),
  cache: true,
  isGlobal: true,
  load: [serverConfigLoader],
  validationSchema: configSchema,
  validationOptions: {
    abortEarly: false,
    allowUnknown: true,
    convert: true
  }
};
