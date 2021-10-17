import { ServerConfig } from '@config/types';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

NestFactory.create(AppModule).then((app: INestApplication) => {
  const configService = app.get(ConfigService);
  const { port } = configService.get<ServerConfig>('server');

  app.useGlobalPipes(new ValidationPipe());

  app.listen(port);
});
