import { UserDto } from '@core/dtos';
import { LoginDto } from '@core/dtos/accounts/auth/login.dto';
import { RegisterDto } from '@core/dtos/accounts/auth/register.dto';
import { TokenDto } from '@core/dtos/accounts/auth/token.dto';
import { Controller, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { first, firstValueFrom } from 'rxjs';

import { AccountsTcpService } from '../../tcp/services/accounts-tcp.service';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {
  private accounts: ClientProxy;

  constructor(
    private readonly accountsTcpService: AccountsTcpService,
    private readonly jwtService: JwtService
  ) {
    this.accounts = accountsTcpService.getClient();
  }

  public async login(credentials: LoginDto): Promise<TokenDto> {
    const user = await firstValueFrom(
      this.accounts.send<UserDto, LoginDto>({ cmd: 'login' }, credentials)
    );
    if (user) {
      return this.jwtService.createToken({
        id: user.uuid,
        roleId: user.roleId,
        scope: 'api'
      });
    }
  }

  public async me(userId: string) {
    const user = await firstValueFrom(
      this.accounts.send({ cmd: 'find_user_with_profile' }, { uuid: userId })
    );
    return user;
  }

  public async register(credentials: RegisterDto): Promise<UserDto> {
    return firstValueFrom(
      this.accounts.send<UserDto, RegisterDto>({ cmd: 'register' }, credentials)
    );
  }
}
