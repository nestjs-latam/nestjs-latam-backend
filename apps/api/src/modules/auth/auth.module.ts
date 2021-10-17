import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { TcpModule } from '../tcp/tcp.module';
import { AuthController } from './controllers/auth.controller';
import { ConfigModule } from '@nestjs/config';

import { AuthService } from './services/auth.service';
import { jwtOptions } from './registers/jwt/jwt.options';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtService } from './services/jwt.service';
import { jwtConfigLoader } from '../../config/loaders/jwt.loader';

@Module({
  imports: [
    ConfigModule.forFeature(jwtConfigLoader),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.registerAsync(jwtOptions),
    TcpModule
  ],
  providers: [PassportModule, AuthService, JwtStrategy, JwtService],
  controllers: [AuthController]
})
export class AuthModule {}
