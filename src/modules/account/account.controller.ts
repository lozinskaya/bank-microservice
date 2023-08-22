import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CAccountService } from './account.service';
import { CAccountDto } from './dto/account.dto';
import { CCreateAccountDto } from './dto/create-account.dto';
import { CUpdateAccountDto } from './dto/update-account.dto';

@ApiTags('Аккаунты')
@Controller('account')
export class CAccountController {
  constructor(private readonly accountService: CAccountService) {}

  @Post()
  @ApiOperation({ summary: 'Добавление аккаунта' })
  @ApiBody({ type: CCreateAccountDto, required: true, description: 'Описание аккаунта' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Добавленный аккаунт', type: CAccountDto })
  create(@Body() createAccountDto: CCreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получение всех аккаунтов' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Список аккаунтов', type: [CAccountDto] })
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение аккаунта по id' })
  @ApiParam({ name: 'id', type: Number, required: true, description: 'ID аккаунта' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Найденный аккаунт', type: CCreateAccountDto })
  findOne(@Param('id') id: number) {
    return this.accountService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Изменение аккаунта по id' })
  @ApiParam({ name: 'id', type: Number, required: true, description: 'ID аккаунта' })
  @ApiBody({ type: CCreateAccountDto, required: true, description: 'Описание аккаунта' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Изменённый аккаунт', type: CAccountDto })
  update(@Param('id') id: number, @Body() dto: CUpdateAccountDto) {
    return this.accountService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление аккаунта по id' })
  @ApiParam({ name: 'id', type: Number, required: true, description: 'ID аккаунта' })
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
