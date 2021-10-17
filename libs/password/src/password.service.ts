import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  public generate(value: string, salts = 1): string {
    return bcrypt.hashSync(value, salts);
  }

  public match(source: string, hash: string): boolean {
    return bcrypt.compareSync(source, hash);
  }
}
