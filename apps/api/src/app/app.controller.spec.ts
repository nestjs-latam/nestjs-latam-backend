import { Test, TestingModule } from '@nestjs/testing';
import { TcpModule } from '../modules/tcp/tcp.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppTestService } from './app.service.test';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TcpModule],
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useClass: AppTestService
        }
      ]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await appController.getHello()).toBe('Hello world!');
    });
  });
});
