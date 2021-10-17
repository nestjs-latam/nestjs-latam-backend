import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordModule } from '@core/password';

import { UsersController } from './controllers/users.controller';
import { UserModel, UserSchema } from './models/user.model';
import { UsersRepository } from './repositories/users.repository';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    PasswordModule
  ],
  providers: [UsersRepository, UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
