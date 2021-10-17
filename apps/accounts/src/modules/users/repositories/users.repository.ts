import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  AnyKeys,
  FilterQuery,
  PaginateModel,
  PaginateOptions,
  PaginateResult,
  QueryOptions
} from 'mongoose';

import { UserModel } from '../models/user.model';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(UserModel.name)
    private readonly users: PaginateModel<UserModel>
  ) {}

  public find(
    filter: FilterQuery<UserModel>,
    options?: PaginateOptions
  ): Promise<PaginateResult<UserModel>> {
    return this.users.paginate(filter, options);
  }

  public findOne(
    filter: FilterQuery<UserModel>,
    projection?: any,
    options?: QueryOptions
  ) {
    return this.users.findOne(filter, projection, options).exec();
  }

  public findUserWithProfile(
    filter: FilterQuery<UserModel>,
    projection?: any,
    options?: QueryOptions
  ) {
    return this.users
      .findOne(filter, projection, options)
      .populate('role')
      .exec();
  }

  public create(params: AnyKeys<UserModel>): Promise<UserModel> {
    return this.users.create(params);
  }

  public async delete(
    filter: FilterQuery<UserModel>,
    options?: QueryOptions
  ): Promise<UserModel> {
    return this.users.findOneAndDelete(filter, options).exec();
  }
}
