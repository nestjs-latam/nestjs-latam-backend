import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  public async notificationCreated(payload: any): Promise<void> {
    payload;
  }
}
