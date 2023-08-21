import { PartialType } from '@nestjs/mapped-types';

import { CCreateAccountDto } from './create-account.dto';

export class CUpdateAccountDto extends PartialType(CCreateAccountDto) {}
