import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    return this.accountRepository.findByPk(id, { attributes: ['balance'] });
  }

  async update(id: number, dto: CUpdateAccountDto) {
    const account = await this.accountRepository.findByPk(id);

    // 404 код ошибки - не найдено
    if (!account) throw new HttpException(`Аккаунт с id=${id} не найден`, HttpStatus.NOT_FOUND)

    await account.update(dto);

    return account;
  }

  async remove(id: number) {
    const account = await this.accountRepository.findByPk(id);

    // 404 код ошибки - не найдено
    if (!account) throw new HttpException(`Аккаунт с id=${id} не найден`, HttpStatus.NOT_FOUND)

    await account.destroy();

    return { success: true };
  }
}
