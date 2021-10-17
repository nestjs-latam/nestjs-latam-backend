import { Controller } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';

import { NotificationsTcpService } from '../tcp/services/notifications-tcp.service';
import { AccountService } from './account.service';

@Controller()
export class AccountController {
  private notifications: ClientProxy;

  constructor(
    private readonly accountService: AccountService,
    private readonly eventEmitter: EventEmitter2,
    private readonly notificationsService: NotificationsTcpService
  ) {
    this.notifications = notificationsService.getClient();
  }

  @MessagePattern({ cmd: 'hello' })
  public hello() {
    const message = this.accountService.getHello();
    this.eventEmitter.emit('hello', message);
    return message;
  }

  @OnEvent('hello')
  public OnHello(message: string) {
    this.notifications.emit(
      { cmd: 'notification.created' },
      {
        data: { message }
      }
    );
  }
}
