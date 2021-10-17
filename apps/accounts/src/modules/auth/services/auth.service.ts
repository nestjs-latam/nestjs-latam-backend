import { LoginDto } from '@core/dtos/accounts/auth/login.dto';
import { RegisterDto } from '@core/dtos/accounts/auth/register.dto';
import { Injectable } from '@nestjs/common';
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
    const role = await this.rolesService.findOne({ name: 'user' });
    return this.usersService.register({
      ...user,
      roleId: role.uuid
    });
  }
}
