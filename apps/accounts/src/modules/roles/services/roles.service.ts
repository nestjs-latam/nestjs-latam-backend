import { Injectable } from '@nestjs/common';
import {
  FilterQuery,
  PaginateOptions,
  PaginateResult,
  QueryOptions,
  AnyKeys
} from 'mongoose';

import { RoleModel } from '../models/role.model';
import { RolesRepository } from '../repositories/roles.repository';

@Injectable()
export class RolesService {
  constructor(private readonly roles: RolesRepository) {}

  public find(
    filter: FilterQuery<RoleModel>,
    options?: PaginateOptions
  ): Promise<PaginateResult<RoleModel>> {
    return this.roles.find(filter, options);
  }

  public findOne(
    filter: FilterQuery<RoleModel>,
    projection?: any,
    options?: QueryOptions
  ): Promise<RoleModel> {
    return this.roles.findOne(filter, projection, options);
  }

  public create(params: AnyKeys<RoleModel>): Promise<RoleModel> {
    return this.roles.create(params);
  }

  public async delete(
    filter: FilterQuery<RoleModel>,
    options?: QueryOptions
  ): Promise<RoleModel> {
    return this.roles.delete(filter, options);
  }
}
