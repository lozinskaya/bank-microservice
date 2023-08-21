import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table } from 'sequelize-typescript';

export interface IAccountCreationAttributes {
  balance: string;
}

@Table({ tableName: 'Account' })
export class CAccountModel extends Model<CAccountModel, IAccountCreationAttributes> {
  @ApiProperty({ description: 'Баланс' })
  @Column({})
  balance: number;
}
