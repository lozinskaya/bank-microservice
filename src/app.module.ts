import { Module } from '@nestjs/common';

import { CAppController } from './app.controller';
import { CAppService } from './app.service';

@Module({
  imports: [],
  controllers: [CAppController],
  providers: [CAppService],
})
export class CAppModule {}
