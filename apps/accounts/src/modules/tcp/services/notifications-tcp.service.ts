import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NotificationsTcpService {
  constructor(
    @Inject('NOTIFICATIONS')
    private readonly notifications: ClientProxy
  ) {}

  public getClient(): ClientProxy {
    return this.notifications;
  }
}
