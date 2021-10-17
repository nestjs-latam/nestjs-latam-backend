import { Test, TestingModule } from '@nestjs/testing';

import { PasswordService } from './password.service';

describe('PasswordService', () => {
  let service: PasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordService]
    }).compile();

    service = module.get<PasswordService>(PasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should hash password', () => {
    const password = service.generate('test', 10);
    expect(password.startsWith('$2b')).toBeTruthy();
    expect(password).not.toBe('test');
  });

  it('should compare success', () => {
    const hash = service.generate('test', 10);
    expect(service.match('test', hash)).toBeTruthy();
  });

  it('should compare with error', () => {
    const hash = service.generate('_test_', 10);
    expect(service.match('test', hash)).toBeFalsy();
  });
});
