import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AccountsTcpService {
  constructor(
    @Inject('ACCOUNTS')
    private readonly accounts: ClientProxy
  ) {}

  public getClient(): ClientProxy {
    return this.accounts;
  }
}
