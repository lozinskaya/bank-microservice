import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { account, transfer } from './modules';

const models = [...account.models];
const modules = [...account.modules, ...transfer.modules];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models,
      autoLoadModels: false,
    }),
    ...modules,
  ],
  providers: [],
})
export class CAppModule {}
