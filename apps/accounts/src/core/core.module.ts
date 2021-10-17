import { RpcExceptionFilter } from '@core/exceptions/rpc/exception.filter';
import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { configModuleOptions } from '../config';
import { mongooseModuleAsyncOptions } from './mongoose/mongoose.options';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions)
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: RpcExceptionFilter
    }
  ]
})
export class CoreModule {}
