import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { CAccountService } from 'src/modules/account/account.service';

import { CCreateTransferDto } from './dto/create-transfer.dto';

@Injectable()
export class CTransferService {
  constructor(private readonly accountService: CAccountService, private sequelize: Sequelize) {}

  async create(sourceId: number, targetId: number, dto: CCreateTransferDto) {
    const { amount } = dto;
    const sourceAccount = await this.accountService.findOne(sourceId);
    const targetAccount = await this.accountService.findOne(targetId);

    // 400 код ошибки - некорректный запрос
    if (Number(sourceAccount.balance) < amount)
      throw new HttpException('Недостаточно средств для перевода', HttpStatus.BAD_REQUEST);

    try {
      const result = await this.sequelize.transaction(async () => {
        const balanceSource = Number(sourceAccount.balance) - amount;

        await this.accountService.update(sourceId, { balance: balanceSource });

        const balanceTarget = Number(targetAccount.balance) + amount;

        return this.accountService.update(targetId, { balance: balanceTarget });
      });

      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
