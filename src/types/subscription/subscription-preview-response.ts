/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type CollectionMode, type CurrencyCode, type SubscriptionStatus } from '../../enums/index.js';
import { type ISubscriptionDiscountResponse } from './subscription-discount-response.js';
import {
  type IBillingDetailsResponse,
  type ICustomData,
  type IImportMetaResponse,
  type ITimePeriod,
  type ITransactionDetailsPreviewResponse,
} from '../shared/index.js';
import { type ISubscriptionTimePeriodResponse } from './subscription-time-period-response.js';
import { type ISubscriptionScheduledChangeResponse } from './subscription-scheduled-change-response.js';
import { type ISubscriptionManagementResponse } from './subscription-management-response.js';
import { type ISubscriptionItemResponse } from './subscription-item-response.js';
import { type INextTransactionResponse } from './next-transaction-response.js';
import { type ISubscriptionPreviewUpdateSummary } from './subscription-preview-update-summary.js';

export interface ISubscriptionPreviewResponse {
  status: SubscriptionStatus;
  customer_id: string;
  address_id: string;
  business_id?: string | null;
  currency_code: CurrencyCode;
  created_at: string;
  updated_at: string;
  started_at?: string | null;
  first_billed_at?: string | null;
  next_billed_at?: string | null;
  paused_at?: string | null;
  canceled_at?: string | null;
  discount?: ISubscriptionDiscountResponse | null;
  collection_mode: CollectionMode;
  billing_details?: IBillingDetailsResponse | null;
  current_billing_period?: ISubscriptionTimePeriodResponse | null;
  billing_cycle?: ITimePeriod | null;
  scheduled_change?: ISubscriptionScheduledChangeResponse | null;
  management_urls?: ISubscriptionManagementResponse | null;
  items: ISubscriptionItemResponse[];
  custom_data?: ICustomData | null;
  immediate_transaction?: INextTransactionResponse | null;
  next_transaction?: INextTransactionResponse | null;
  recurring_transaction_details?: ITransactionDetailsPreviewResponse | null;
  update_summary?: ISubscriptionPreviewUpdateSummary | null;
  import_meta?: IImportMetaResponse | null;
}
