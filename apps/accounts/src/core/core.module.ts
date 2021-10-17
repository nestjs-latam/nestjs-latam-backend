import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { configModuleOptions } from '../config';
import { mongooseModuleAsyncOptions } from './mongoose/mongoose.options';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions)
  ]
})
export class CoreModule {}
