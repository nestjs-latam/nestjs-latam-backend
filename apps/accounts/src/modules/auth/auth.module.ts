import { Module } from '@nestjs/common';

import { RolesModule } from '../roles/roles.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [UsersModule, RolesModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
