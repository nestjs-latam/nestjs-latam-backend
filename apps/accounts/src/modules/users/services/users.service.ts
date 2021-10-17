import { DeleteUserDto } from '@core/dtos/accounts/users/delete-user.dto';
import { FindUserDto } from '@core/dtos/accounts/users/find-user.dto';
import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { PasswordService } from 'libs/password/src';
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
  constructor(
    private readonly users: UsersRepository,
    private readonly passwordService: PasswordService
  ) {}

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

  public async login(username: string, password: string): Promise<UserModel> {
    const user = await this.findOne(
      { username },
      {
        password: 1,
        username: 1
      }
    );

    if (user && this.passwordService.match(password, user?.password)) {
      return this.findOne({ username });
    }

    throw new RpcException({
      error: 'auth.invalid_credentials',
      message: 'Invalid credentials, try again',
      status: 401
    });
  }

  public register(params: AnyKeys<UserModel>): Promise<UserModel> {
    return this.create({
      ...params,
      password: this.passwordService.generate(params.password, 10)
    });
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
