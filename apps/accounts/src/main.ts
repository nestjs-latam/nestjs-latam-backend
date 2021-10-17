import { ServerConfig } from '@config/types';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app/app.module';

NestFactory.create(AppModule).then((app: INestApplication) => {
  const configService = app.get(ConfigService);
  const { host, port } = configService.get<ServerConfig>('server');
  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host,
      port
    }
  };

  app.connectMicroservice(microserviceOptions);
  app.startAllMicroservices();
  app.useGlobalPipes(new ValidationPipe());
  app.listen(port);
});
