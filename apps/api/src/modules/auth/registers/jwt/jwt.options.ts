import { JwtConfig } from '@core/dtos/jwt/jwt-config.dto';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';

export const jwtOptions: JwtModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory(configService: ConfigService): JwtModuleOptions {
    const { expiresIn, secret } = configService.get<JwtConfig>('jwt');
    return {
      secret,
      signOptions: {
        expiresIn
      }
    };
  }
};
