/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type PaymentType } from '../../enums/index.js';
import { type IPaymentCardResponse } from './payment-card-response.js';

export interface IPaymentMethodDetails {
  type: PaymentType;
  card?: IPaymentCardResponse | null;
}
