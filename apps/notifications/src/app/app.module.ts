import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CoreModule } from '../core/core.module';
import { configModuleOptions } from '../config';
import { NotificationsModule } from '../modules/notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    CoreModule,
    NotificationsModule
  ]
})
export class AppModule {}
