import { Module } from '@nestjs/common';

import { TcpModule } from '../modules/tcp/tcp.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TcpModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
