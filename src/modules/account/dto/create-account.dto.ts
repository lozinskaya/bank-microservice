import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CCreateAccountDto {
  @ApiProperty({ description: 'Баланс' })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  balance: number;
}
