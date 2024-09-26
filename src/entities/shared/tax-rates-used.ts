/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Totals } from './totals.js';
import { type ITaxRatesUsedResponse } from '../../types/index.js';

export class TaxRatesUsed {
  public readonly taxRate: string;
  public readonly totals: Totals | null;

  constructor(taxRatesUsed: ITaxRatesUsedResponse) {
    this.taxRate = taxRatesUsed.tax_rate;
    this.totals = taxRatesUsed.totals ? new Totals(taxRatesUsed.totals) : null;
  }
}
