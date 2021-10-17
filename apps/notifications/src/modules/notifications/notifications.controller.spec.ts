import { Test, TestingModule } from '@nestjs/testing';

import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

describe('NotificationsController', () => {
  let notificationsController: NotificationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [NotificationsService]
    }).compile();

    notificationsController = app.get<NotificationsController>(
      NotificationsController
    );
  });

  describe('root', () => {
    it('should void method', async () => {
      expect(
        await notificationsController.notificationCreated({})
      ).toBeUndefined();
    });
  });
});
