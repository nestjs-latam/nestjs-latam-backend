import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FindUserDto } from '@core/dtos/accounts/users/find-user.dto';
import { FindUsersDto } from '@core/dtos/accounts/users/find-users.dto';
import { DeleteUserDto } from '@core/dtos/accounts/users/delete-user.dto';
import { CreateUserDto } from '@core/dtos/accounts/users/create-user.dto';
import { PaginateResult } from 'mongoose';

import { UsersService } from '../services/users.service';
import { UserModel } from '../models/user.model';

@Controller()
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @MessagePattern({ cmd: 'create_user' })
  public createUser(@Body() user: CreateUserDto): Promise<UserModel> {
    return this.users.create(user);
  }

  @MessagePattern({ cmd: 'find_user' })
  public findUser(@Body() filter: FindUserDto): Promise<UserModel> {
    return this.users.findUser(filter);
  }
  @MessagePattern({ cmd: 'find_user_with_profile' })
  public findUserWithProfile(@Body() filter: FindUserDto): Promise<UserModel> {
    return this.users.findUserWithProfile(filter);
  }

  @MessagePattern({ cmd: 'find_users' })
  public findUsers(
    @Body() filter: FindUsersDto
  ): Promise<PaginateResult<UserModel>> {
    return this.users.findUsers(filter);
  }

  @MessagePattern({ cmd: 'delete_user' })
  public deleteUser(@Body() filter: DeleteUserDto): Promise<UserModel> {
    return this.users.deleteUser(filter);
  }
}
