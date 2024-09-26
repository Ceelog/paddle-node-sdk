/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type CurrencyCode } from '../../enums/index.js';
import { type IMoneyResponse } from '../../types/index.js';

export class Money {
  public readonly amount: string;
  public readonly currencyCode: CurrencyCode;

  constructor(money: IMoneyResponse) {
    this.amount = money.amount;
    this.currencyCode = money.currency_code;
  }
}
