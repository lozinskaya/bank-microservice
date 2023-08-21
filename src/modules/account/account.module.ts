import { Module } from '@nestjs/common';

import { CAccountController } from './account.controller';
import { CAccountService } from './account.service';

@Module({
  controllers: [CAccountController],
  providers: [CAccountService],
})
export class CAccountModule {}
