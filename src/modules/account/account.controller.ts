import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CAccountService } from './account.service';
import { CCreateAccountDto } from './dto/create-account.dto';
import { CUpdateAccountDto } from './dto/update-account.dto';

@Controller('account')
export class CAccountController {
  constructor(private readonly accountService: CAccountService) {}

  @Post()
  create(@Body() createAccountDto: CCreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.accountService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: CUpdateAccountDto) {
    return this.accountService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
