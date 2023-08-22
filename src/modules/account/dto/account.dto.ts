import { ApiProperty } from '@nestjs/swagger';
import { CCreateAccountDto } from './create-account.dto'

export class CAccountDto extends CCreateAccountDto {
  @ApiProperty({ description: 'ID аккаунта' })
  id: number;

  @ApiProperty({ description: 'Дата создания' })
  createdAt: Date;

  @ApiProperty({ description: 'Дата обновления' })
  updatedAt: Date;
}
