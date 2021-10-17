import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { configModuleOptions } from '../config';
import { HttpExceptionFilter } from './filters/exception.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions)],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor
    }
  ]
})
export class CoreModule {}
