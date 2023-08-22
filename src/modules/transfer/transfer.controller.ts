import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { CCreateTransferDto } from './dto/create-transfer.dto';
import { CTransferService } from './transfer.service';
@ApiTags('Переводы')
@Controller('transfer')
export class CTransferController {
  constructor(private readonly transferService: CTransferService) {}

  @Post(':sourceId/:targetId')
  @ApiOperation({ summary: 'Создание перевода' })
  @ApiParam({ name: 'sourceId', type: Number, required: true, description: 'ID аккаунта, переводящего' })
  @ApiParam({ name: 'targetId', type: Number, required: true, description: 'ID аккаунта, принимающего перевод' })
  @ApiBody({ type: CCreateTransferDto, required: true, description: 'Описание перевода' })
  create(@Param('sourceId') sourceId: number, @Param('targetId') targetId: number, @Body() dto: CCreateTransferDto) {
    return this.transferService.create(sourceId, targetId, dto);
  }
}
