import { Injectable } from '@nestjs/common';

@Injectable()
export class AppTestService {
  public async getHello(): Promise<string> {
    return 'Hello world!';
  }
}
