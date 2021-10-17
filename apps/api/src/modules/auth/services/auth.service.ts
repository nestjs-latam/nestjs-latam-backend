import { UserDto } from '@core/dtos';
import { LoginDto } from '@core/dtos/accounts/auth/login.dto';
import { RegisterDto } from '@core/dtos/accounts/auth/register.dto';
import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { AccountsTcpService } from '../../tcp/services/accounts-tcp.service';

@Injectable()
export class AuthService {
  private accounts: ClientProxy;

  constructor(private readonly accountsTcpService: AccountsTcpService) {
    this.accounts = accountsTcpService.getClient();
  }

  public async login(credentials: LoginDto): Promise<UserDto> {
    return firstValueFrom(this.accounts.send({ cmd: 'login' }, credentials));
  }

  public async register(credentials: RegisterDto): Promise<UserDto> {
    return firstValueFrom(this.accounts.send({ cmd: 'register' }, credentials));
  }
}
