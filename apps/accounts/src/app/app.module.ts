import { Module } from '@nestjs/common';

import { AccountModule } from '../modules/account/account.module';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [CoreModule, AccountModule]
})
export class AppModule {}
