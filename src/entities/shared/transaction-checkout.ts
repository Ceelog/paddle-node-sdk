/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type ITransactionCheckout } from '../../types/index.js';

export class TransactionCheckout {
  public readonly url: string | null;

  constructor(transactionCheckout: ITransactionCheckout) {
    this.url = transactionCheckout.url ? transactionCheckout.url : null;
  }
}
