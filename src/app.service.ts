import { Injectable } from '@nestjs/common';

@Injectable()
export class CAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
