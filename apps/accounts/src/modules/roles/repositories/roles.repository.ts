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

import { RoleModel } from '../models/role.model';

@Injectable()
export class RolesRepository {
  constructor(
    @InjectModel(RoleModel.name)
    private readonly roles: PaginateModel<RoleModel>
  ) {}

  public find(
    filter: FilterQuery<RoleModel>,
    options?: PaginateOptions
  ): Promise<PaginateResult<RoleModel>> {
    return this.roles.paginate(filter, options);
  }

  public findOne(
    filter: FilterQuery<RoleModel>,
    projection?: any,
    options?: QueryOptions
  ) {
    return this.roles.findOne(filter, projection, options).exec();
  }

  public create(params: AnyKeys<RoleModel>): Promise<RoleModel> {
    return this.roles.create(params);
  }

  public async delete(
    filter: FilterQuery<RoleModel>,
    options?: QueryOptions
  ): Promise<RoleModel> {
    return this.roles.findOneAndDelete(filter, options).exec();
  }
}
