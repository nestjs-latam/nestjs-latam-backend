import { JwtConfig } from '@core/dtos/jwt/jwt-config.dto';
import { registerAs } from '@nestjs/config';

import { configLoader } from './config.loader';

export const jwtConfigLoader = registerAs(
  'jwt',
  (): JwtConfig => configLoader().jwt
);
