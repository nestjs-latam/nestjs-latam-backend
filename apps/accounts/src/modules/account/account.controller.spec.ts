import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';

import { TcpModule } from '../tcp/tcp.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

describe('AccountController', () => {
  let accountController: AccountController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TcpModule, EventEmitterModule.forRoot()],
      controllers: [AccountController],
      providers: [AccountService]
    }).compile();

    accountController = app.get<AccountController>(AccountController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await accountController.hello()).toBe('Hello World!');
    });
  });
});
