import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  HttpException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

import { AccountsTcpService } from '../../tcp/services/accounts-tcp.service';
import { UserDto } from '@core/dtos';
import { firstValueFrom } from 'rxjs';
import { RolesRepository } from 'apps/accounts/src/modules/roles/repositories/roles.repository';
import { SessionDto } from '@core/dtos/accounts/auth/session.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private accounts: ClientProxy;

  constructor(
    private readonly configService: ConfigService,
    private readonly accountsTcpService: AccountsTcpService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret')
    });
    this.accounts = this.accountsTcpService.getClient();
  }

  public async validate(payload: any): Promise<SessionDto> {
    try {
      const user = await firstValueFrom(
        this.accounts.send(
          { cmd: 'find_user_with_profile' },
          { uuid: payload.id }
        )
      );

      if (!user) {
        throw new UnauthorizedException('accounts.auth.invalid-token');
      }

      return {
        id: user?.uuid,
        roleId: user?.roleId,
        scope: user?.role.scope
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
