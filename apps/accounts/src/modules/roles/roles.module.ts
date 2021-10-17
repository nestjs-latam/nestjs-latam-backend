import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RolesController } from './controllers/roles.controller';
import { RoleModel, RoleSchema } from './models/role.model';
import { RolesRepository } from './repositories/roles.repository';
import { RolesService } from './services/roles.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RoleModel.name,
        schema: RoleSchema
      }
    ])
  ],
  providers: [RolesService, RolesRepository],
  controllers: [RolesController],
  exports: [RolesService]
})
export class RolesModule {}
