/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type IEventsResponse, type ISubscriptionNotificationResponse } from '../../../types';

export const SubscriptionCreatedMock: IEventsResponse<ISubscriptionNotificationResponse> = {
  event_id: 'evt_01h7ht60jy5hpdv5x8tfsaxje4',
  event_type: 'subscription.created',
  occurred_at: '2023-08-11T08:07:38.334150Z',
  notification_id: 'ntf_01h7ht60n4grsa2a5ddd54h1j0',
  data: {
    id: 'sub_01h7ht5z5wdg9pz18jx1fagp8k',
    items: [
      {
        price: {
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          tax_mode: 'account_setting',
          product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          unit_price: { amount: '3240', currency_code: 'USD' },
          description: 'Monthly (per seat)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
        },
        status: 'active',
        quantity: 10,
        recurring: true,
        created_at: '2023-08-11T08:07:36.892823Z',
        updated_at: '2023-08-11T08:07:36.892823Z',
        trial_dates: null,
        next_billed_at: '2023-09-11T08:07:35.449123Z',
        previously_billed_at: '2023-08-11T08:07:35.449123Z',
      },
      {
        price: {
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          tax_mode: 'account_setting',
          product_id: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          unit_price: { amount: '10800', currency_code: 'USD' },
          description: 'Monthly (recurring addon)',
          trial_period: null,
          billing_cycle: { interval: 'month', frequency: 1 },
        },
        status: 'active',
        quantity: 1,
        recurring: true,
        created_at: '2023-08-11T08:07:36.892827Z',
        updated_at: '2023-08-11T08:07:36.892827Z',
        trial_dates: null,
        next_billed_at: '2023-09-11T08:07:35.449123Z',
        previously_billed_at: '2023-08-11T08:07:35.449123Z',
      },
    ],
    status: 'active',
    paused_at: null,
    address_id: 'add_01h7hswbfjqez51ezfhk7s6400',
    created_at: '2023-08-11T08:07:36.892822Z',
    started_at: '2023-08-11T08:07:35.449123Z',
    updated_at: '2023-08-11T08:07:36.892822Z',
    business_id: 'biz_01h7ht30avfmwa4kvkfeg4ef8e',
    canceled_at: null,
    discount: null,
    custom_data: null,
    customer_id: 'ctm_01h7hswb86rtps5ggbq7ybydcw',
    billing_cycle: { interval: 'month', frequency: 1 },
    currency_code: 'USD',
    next_billed_at: '2023-09-11T08:07:35.449123Z',
    transaction_id: 'txn_01h7hst69d7tar4rm6vyeb0j36',
    billing_details: null,
    collection_mode: 'automatic',
    first_billed_at: '2023-08-11T08:07:35.449123Z',
    scheduled_change: null,
    current_billing_period: { ends_at: '2023-09-11T08:07:35.449123Z', starts_at: '2023-08-11T08:07:35.449123Z' },
  },
};

export const SubscriptionCreatedMockExpectation = {
  data: {
    addressId: 'add_01h7hswbfjqez51ezfhk7s6400',
    billingCycle: {
      frequency: 1,
      interval: 'month',
    },
    billingDetails: null,
    businessId: 'biz_01h7ht30avfmwa4kvkfeg4ef8e',
    canceledAt: null,
    collectionMode: 'automatic',
    createdAt: '2023-08-11T08:07:36.892822Z',
    currencyCode: 'USD',
    currentBillingPeriod: {
      endsAt: '2023-09-11T08:07:35.449123Z',
      startsAt: '2023-08-11T08:07:35.449123Z',
    },
    customData: null,
    importMeta: null,
    customerId: 'ctm_01h7hswb86rtps5ggbq7ybydcw',
    discount: null,
    firstBilledAt: '2023-08-11T08:07:35.449123Z',
    id: 'sub_01h7ht5z5wdg9pz18jx1fagp8k',
    items: [
      {
        createdAt: '2023-08-11T08:07:36.892823Z',
        nextBilledAt: '2023-09-11T08:07:35.449123Z',
        previouslyBilledAt: '2023-08-11T08:07:35.449123Z',
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          description: 'Monthly (per seat)',
          id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
          productId: 'pro_01gsz4t5hdjse780zja8vvr7jg',
          taxMode: 'account_setting',
          trialPeriod: null,
          unitPrice: {
            amount: '3240',
            currencyCode: 'USD',
          },
        },
        quantity: 10,
        recurring: true,
        status: 'active',
        trialDates: null,
        updatedAt: '2023-08-11T08:07:36.892823Z',
      },
      {
        createdAt: '2023-08-11T08:07:36.892827Z',
        nextBilledAt: '2023-09-11T08:07:35.449123Z',
        previouslyBilledAt: '2023-08-11T08:07:35.449123Z',
        price: {
          billingCycle: {
            frequency: 1,
            interval: 'month',
          },
          description: 'Monthly (recurring addon)',
          id: 'pri_01h1vjfevh5etwq3rb416a23h2',
          productId: 'pro_01h1vjes1y163xfj1rh1tkfb65',
          taxMode: 'account_setting',
          trialPeriod: null,
          unitPrice: {
            amount: '10800',
            currencyCode: 'USD',
          },
        },
        quantity: 1,
        recurring: true,
        status: 'active',
        trialDates: null,
        updatedAt: '2023-08-11T08:07:36.892827Z',
      },
    ],
    nextBilledAt: '2023-09-11T08:07:35.449123Z',
    pausedAt: null,
    scheduledChange: null,
    startedAt: '2023-08-11T08:07:35.449123Z',
    status: 'active',
    transactionId: 'txn_01h7hst69d7tar4rm6vyeb0j36',
    updatedAt: '2023-08-11T08:07:36.892822Z',
  },
  eventId: 'evt_01h7ht60jy5hpdv5x8tfsaxje4',
  eventType: 'subscription.created',
  notificationId: 'ntf_01h7ht60n4grsa2a5ddd54h1j0',
  occurredAt: '2023-08-11T08:07:38.334150Z',
};
