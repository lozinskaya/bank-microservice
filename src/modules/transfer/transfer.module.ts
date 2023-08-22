import { Module } from '@nestjs/common';
import { CAccountModule } from 'src/modules/account';

import { CTransferController } from './transfer.controller';
import { CTransferService } from './transfer.service';

@Module({
  controllers: [CTransferController],
  providers: [CTransferService],
  imports: [CAccountModule],
})
export class CTransferModule {}
