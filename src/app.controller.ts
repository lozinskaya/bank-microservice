import { Controller, Get } from '@nestjs/common';

import { CAppService } from './app.service';

@Controller()
export class CAppController {
  constructor(private readonly appService: CAppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
