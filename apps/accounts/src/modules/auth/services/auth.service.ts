import { LoginDto } from '@core/dtos/accounts/auth/login.dto';
import { RegisterDto } from '@core/dtos/accounts/auth/register.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { LeanDocument } from 'mongoose';
import { RolesService } from '../../roles/services/roles.service';

import { UserModel } from '../../users/models/user.model';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService
  ) {}

  public login(credentials: LoginDto): Promise<UserModel> {
    const { username, password } = credentials;
    return this.usersService.login(username, password);
  }

  public async register(user: RegisterDto): Promise<UserModel> {
    try {
      const role = await this.rolesService.findOne({ name: 'user' });
      const account = await this.usersService.register({
        ...user,
        roleId: role.uuid
      });
      return this.usersService.findOne({ uuid: account.uuid });
    } catch (error) {
      if (error.code === 11000) {
        error.message = 'auth.username-already-taken';
      }
      throw new RpcException({
        message: error.message,
        status: 409
      });
    }
  }
}
