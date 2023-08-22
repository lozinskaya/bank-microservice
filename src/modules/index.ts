import { CAccountModel, CAccountModule } from './account';
import { CTransferModule } from './transfer/transfer.module';

export const account = {
  modules: [CAccountModule],
  models: [CAccountModel],
};

export const transfer = {
  modules: [CTransferModule],
  models: [],
}