import { Injectable } from '@nestjs/common';

import { CCreateAccountDto } from './dto/create-account.dto';
import { CUpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class CAccountService {
  create(createAccountDto: CCreateAccountDto) {
    return 'This action adds a new account';
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: CUpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
