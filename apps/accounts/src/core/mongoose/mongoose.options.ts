import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

import { databaseLoader } from '../../config/loaders/database.loader';
import { MongooseFactory } from './mongoose.factory';

export const mongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  imports: [ConfigModule.forFeature(databaseLoader)],
  inject: [ConfigService],
  useClass: MongooseFactory
};
