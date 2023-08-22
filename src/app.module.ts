import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CAppService } from './app.service';
import { account } from './modules';

const models = [...account.models];
const modules = [...account.modules];

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
  providers: [CAppService],
})
export class CAppModule {}
