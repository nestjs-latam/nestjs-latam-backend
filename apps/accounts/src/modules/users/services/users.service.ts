import { DeleteUserDto } from '@core/dtos/accounts/users/delete-user.dto';
import { FindUserDto } from '@core/dtos/accounts/users/find-user.dto';
import { Injectable } from '@nestjs/common';
import {
  FilterQuery,
  QueryOptions,
  AnyKeys,
  PaginateOptions,
  PaginateResult
} from 'mongoose';
import { UserModel } from '../models/user.model';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly users: UsersRepository) {}

  public findUser(filter: FindUserDto): Promise<UserModel> {
    return this.findOne(filter);
  }

  public findUsers(filter: FindUserDto): Promise<PaginateResult<UserModel>> {
    return this.find(filter);
  }

  public deleteUser(filter: DeleteUserDto): Promise<UserModel> {
    return this.delete(filter);
  }

  public findOne(
    filter: FilterQuery<UserModel>,
    projection?: any,
    options?: QueryOptions
  ): Promise<UserModel> {
    return this.users.findOne(filter, projection, options);
  }

  public find(
    filter?: FilterQuery<UserModel>,
    options?: PaginateOptions
  ): Promise<PaginateResult<UserModel>> {
    return this.users.find(filter, options);
  }

  public create(params: AnyKeys<UserModel>): Promise<UserModel> {
    return this.users.create(params);
  }

  public async delete(
    filter: FilterQuery<UserModel>,
    options?: QueryOptions
  ): Promise<UserModel> {
    return this.users.delete(filter, options);
  }
}
