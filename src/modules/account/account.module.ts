import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CAccountController } from './account.controller';
import { CAccountModel } from './account.model';
import { CAccountService } from './account.service';

@Module({
  controllers: [CAccountController],
  providers: [CAccountService],
  imports: [SequelizeModule.forFeature([CAccountModel])],
})
export class CAccountModule {}
