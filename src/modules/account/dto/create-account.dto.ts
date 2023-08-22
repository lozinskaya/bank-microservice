import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class CCreateAccountDto {
  @ApiProperty({ description: 'Баланс' })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  balance: number;
}
