import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CCreateTransferDto {
  @ApiProperty({ description: 'Сумма перевода' })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount: number;
}
