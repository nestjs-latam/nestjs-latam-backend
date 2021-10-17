import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AccountsTcpService } from '../modules/tcp/services/accounts-tcp.service';

@Injectable()
export class AppService {
  private accounts: ClientProxy;

  constructor(private readonly accountsTcp: AccountsTcpService) {
    this.accounts = accountsTcp.getClient();
  }
  getHello(): Promise<string> {
    return firstValueFrom(this.accounts.send({ cmd: 'hello' }, false));
  }
}
