import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class CCreateTransferDto {
  @ApiProperty({ description: 'Сумма перевода' })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
