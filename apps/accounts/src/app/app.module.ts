import { Module } from '@nestjs/common';

import { CoreModule } from '../core/core.module';
import { AuthModule } from '../modules/auth/auth.module';
import { RolesModule } from '../modules/roles/roles.module';
import { UsersModule } from '../modules/users/users.module';

@Module({
  imports: [CoreModule, AuthModule, UsersModule, RolesModule]
})
export class AppModule {}
