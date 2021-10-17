import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { NotificationsService } from './notifications.service';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @MessagePattern({ cmd: 'notification.created' })
  public async notificationCreated(@Body() payload: any): Promise<void> {
    return this.notificationsService.notificationCreated(payload);
  }
}
