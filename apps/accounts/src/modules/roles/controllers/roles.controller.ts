import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RoleModel } from '../models/role.model';
import { RolesService } from '../services/roles.service';

@Controller()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @MessagePattern({ cmd: 'create_role' })
  public createRole(@Body() payload: CreateRoleDto): Promise<RoleModel> {
    return this.rolesService.create(payload);
  }
}
