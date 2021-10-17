import { Module } from '@nestjs/common';

import { CoreModule } from '../core/core.module';
import { AuthModule } from '../modules/auth/auth.module';
import { TcpModule } from '../modules/tcp/tcp.module';

@Module({
  imports: [CoreModule, TcpModule, AuthModule],
  controllers: [],
  providers: []
})
export class AppModule {}
