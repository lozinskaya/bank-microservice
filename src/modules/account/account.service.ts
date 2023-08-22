import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CAccountModel } from './account.model';
import { CCreateAccountDto } from './dto/create-account.dto';
import { CUpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class CAccountService {
  constructor(@InjectModel(CAccountModel) private accountRepository: typeof CAccountModel) {}

  create(dto: CCreateAccountDto) {
    return this.accountRepository.create({ ...dto });
  }

  findAll() {
    return this.accountRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, dto: CUpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
