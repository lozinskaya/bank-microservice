import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

import { CCreateTransferDto } from './dto/create-transfer.dto';
import { CTransferService } from './transfer.service';

@Controller('transfer')
export class CTransferController {
  constructor(private readonly transferService: CTransferService) {}

  @Post(':sourceId/:targetId')
  @ApiOperation({ summary: 'Создание перевода' })
  create(@Param('sourceId') sourceId: number, @Param('targetId') targetId: number, @Body() dto: CCreateTransferDto) {
    return this.transferService.create(sourceId, targetId, dto);
  }
}
