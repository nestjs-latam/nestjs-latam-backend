import { DatabaseConfig } from '@config/types/lib/database-config.type';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory
} from '@nestjs/mongoose';
import { mongooseHideObjectId } from '@plugins/mongoose-hide-object-id';
import { ConnectionString } from 'connection-string';
import { Connection } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate';

@Injectable()
export class MongooseFactory implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  public createMongooseOptions(): MongooseModuleOptions {
    const config = this.configService.get<DatabaseConfig>('database');

    const uri = new ConnectionString('', {
      protocol: config.port ? 'mongodb' : 'mongodb+srv',
      hosts: [{ name: config.host, port: config.port }],
      path: [config.database]
    }).toString();

    return {
      uri,
      dbName: config.database,
      auth: {
        username: config.username,
        password: config.password
      },
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectionFactory: this.connectionFactory
    };
  }

  private async connectionFactory(connection: Connection): Promise<Connection> {
    connection.plugin(mongooseHideObjectId);
    connection.plugin(mongoosePaginate);
    return connection;
  }
}
