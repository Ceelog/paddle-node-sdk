/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { CreateSubscriptionCharge, UpdateSubscriptionRequestBody } from '../../../resources/index.js';
import { ISubscriptionPreviewResponse, ISubscriptionResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';

export const CreateSubscriptionMock: CreateSubscriptionCharge = {
  effectiveFrom: 'next_billing_period',
  items: [
    {
      priceId: 'pri_01gsz8z1q1n00f12qt82y31smh',
      quantity: 5,
    },
  ],
};

export const UpdateSubscriptionMock: UpdateSubscriptionRequestBody = {
  customerId: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  addressId: 'add_01gm302t81w94gyjpjpqypkzkf',
  businessId: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  currencyCode: 'USD',
  nextBilledAt: '2024-10-12T07:20:50.52Z',
  discount: { id: 'dsc_01gv5kpg05xp104ek2fmgjwttf', effectiveFrom: 'next_billing_period' },
  collectionMode: 'automatic',
  billingDetails: {
    enableCheckout: true,
    purchaseOrderNumber: 'NO_VALUE',
    additionalInformation: 'NO_VALUE',
    paymentTerms: { interval: 'day', frequency: 10 },
  },
  scheduledChange: {
    action: 'cancel',
    effectiveAt: '',
  },
  items: [{ priceId: 'pri_01gsz8z1q1n00f12qt82y31smh', quantity: 10 }],
  customData: { customer_reference_id: 'abcd1234' },
  prorationBillingMode: 'prorated_immediately',
  onPaymentFailure: 'prevent_change',
};

export const CreateSubscriptionExpectation = {
  effective_from: 'next_billing_period',
  items: [
    {
      price_id: 'pri_01gsz8z1q1n00f12qt82y31smh',
      quantity: 5,
    },
  ],
};

export const UpdateSubscriptionExpectation = {
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  address_id: 'add_01gm302t81w94gyjpjpqypkzkf',
  business_id: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  currency_code: 'USD',
  next_billed_at: '2024-10-12T07:20:50.52Z',
  discount: { id: 'dsc_01gv5kpg05xp104ek2fmgjwttf', effective_from: 'next_billing_period' },
  collection_mode: 'automatic',
  billing_details: {
    enable_checkout: true,
    purchase_order_number: 'NO_VALUE',
    additional_information: 'NO_VALUE',
    payment_terms: { interval: 'day', frequency: 10 },
  },
  scheduled_change: {
    action: 'cancel',
    effective_at: '',
  },
  items: [{ price_id: 'pri_01gsz8z1q1n00f12qt82y31smh', quantity: 10 }],
  custom_data: { customer_reference_id: 'abcd1234' },
  proration_billing_mode: 'prorated_immediately',
  on_payment_failure: 'prevent_change',
};

export const SubscriptionMock: ISubscriptionResponse = {
  id: 'sub_01h04vsc0qhwtsbsxh3422wjs4',
  status: 'active',
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  address_id: 'add_01gm302t81w94gyjpjpqypkzkf',
  business_id: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  currency_code: 'USD',
  created_at: '2024-10-12T07:20:50.52Z',
  updated_at: '2024-10-13T07:20:50.52Z',
  started_at: '2024-10-12T07:20:50.52Z',
  first_billed_at: '2024-10-12T07:20:50.52Z',
  next_billed_at: '2024-10-12T07:20:50.52Z',
  paused_at: '2024-10-12T07:20:50.52Z',
  canceled_at: '2024-10-12T07:20:50.52Z',
  discount: {
    id: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
    starts_at: '2024-10-12T07:20:50.52Z',
    ends_at: '2024-10-12T07:20:50.52Z',
  },
  collection_mode: 'automatic',
  billing_details: {
    enable_checkout: true,
    purchase_order_number: 'NO_VALUE',
    additional_information: 'NO_VALUE',
    payment_terms: { interval: 'day', frequency: 10 },
  },
  current_billing_period: { starts_at: '2024-10-12T07:20:50.52Z', ends_at: '2024-10-12T07:20:50.52Z' },
  billing_cycle: { interval: 'day', frequency: 10 },
  scheduled_change: { action: 'cancel', effective_at: '2024-10-12T07:20:50.52Z', resume_at: '2024-10-12T07:20:50.52Z' },
  management_urls: {
    update_payment_method:
      'https://buyer-portal.paddle.com/subscriptions/sub_01gtewvbsyeqyhtp2vtc2mctq8/update-payment-method?token=',
    cancel: 'https://buyer-portal.paddle.com/subscriptions/sub_01gtewvbsyeqyhtp2vtc2mctq8/cancel?token=',
  },
  items: [
    {
      status: 'active',
      quantity: 10,
      recurring: true,
      created_at: '2024-10-12T07:20:50.52Z',
      updated_at: '2024-10-13T07:20:50.52Z',
      previously_billed_at: '2024-10-12T07:20:50.52Z',
      next_billed_at: '2024-10-12T07:20:50.52Z',
      trial_dates: { starts_at: '2024-10-12T07:20:50.52Z', ends_at: '2024-10-12T07:20:50.52Z' },
      price: {
        id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
        product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
        type: 'standard',
        description: 'Monthly (per seat)',
        name: 'Monthly (per seat)',
        tax_mode: 'account_setting',
        billing_cycle: {
          frequency: 1,
          interval: 'month',
        },
        trial_period: null,
        unit_price: {
          amount: '3000',
          currency_code: 'USD',
        },
        unit_price_overrides: [],
        custom_data: {
          features: {
            crm: true,
            data_retention: false,
            reports: true,
          },
          suggested_addons: ['pro_01h1vjes1y163xfj1rh1tkfb65', 'pro_01gsz97mq9pa4fkyy0wqenepkz'],
          upgrade_description:
            "Move from Basic to Pro to take advantage of advanced reporting and a CRM that's right where you're chatting.",
        },
        status: 'active',
        quantity: {
          minimum: 1,
          maximum: 999,
        },
        import_meta: null,
        created_at: '2024-10-12T07:20:50.52Z',
        updated_at: '2024-10-12T07:20:50.52Z',
      },
      product: {
        id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
        name: 'AeroEdit Pro',
        type: 'standard',
        tax_category: 'standard',
        description:
          'Designed for professional pilots, including all features plus in Basic plus compliance monitoring, route optimization, and third-party integrations.',
        image_url: 'https://paddle.s3.amazonaws.com/user/165798/bT1XUOJAQhOUxGs83cbk_pro.png',
        custom_data: {
          features: {
            aircraft_performance: true,
            compliance_monitoring: true,
            flight_log_management: true,
            payment_by_invoice: false,
            route_planning: true,
            sso: false,
          },
          suggested_addons: ['pro_01h1vjes1y163xfj1rh1tkfb65', 'pro_01gsz97mq9pa4fkyy0wqenepkz'],
          upgrade_description:
            'Move from Basic to Pro to take advantage of aircraft performance, advanced route planning, and compliance monitoring.',
        },
        status: 'active',
        import_meta: null,
        created_at: '2023-02-23T12:43:46.605Z',
        updated_at: '2024-04-05T15:53:44.687Z',
      },
    },
  ],
  custom_data: { customer_reference_id: 'abcd1234' },
  import_meta: { external_id: '9b95b0b8-e10f-441a-862e-1936a6d818ab', imported_from: 'billing_platform' },
  next_transaction: {
    adjustments: [
      {
        items: [
          {
            amount: '1000',
            id: 'adj_1234',
            item_id: '1234',
            proration: {
              billing_period: {
                starts_at: '2024-10-12T07:20:50.52Z',
                ends_at: '2024-11-12T07:20:50.52Z',
              },
              rate: '10',
            },
            totals: {
              subtotal: '100',
              total: '150',
              tax: '50',
            },
            type: 'full',
          },
        ],
        totals: {
          currency_code: 'USD',
          earnings: '1000',
          tax: '100',
          total: '100000',
          fee: '200',
          subtotal: '500',
        },
        transaction_id: 'txn_1234',
      },
    ],
    billing_period: {
      starts_at: '2024-10-12T07:20:50.52Z',
      ends_at: '2024-11-12T07:20:50.52Z',
    },
    details: {
      totals: {
        balance: '1000',
        total: '1000',
        grand_total: '1000',
        tax: '1000',
        currency_code: 'USD',
        credit: '1000',
        fee: '1000',
        discount: '1000',
        credit_to_balance: '1000',
        earnings: '1000',
        subtotal: '1000',
      },
      tax_rates_used: [
        {
          tax_rate: '1000',
          totals: {
            subtotal: '900',
            tax: '100',
            total: '1000',
            discount: '10',
          },
        },
      ],
      line_items: [
        {
          price_id: 'pri_1234',
          quantity: 10,
          totals: {
            subtotal: '900',
            tax: '100',
            total: '1000',
            discount: '10',
          },
          tax_rate: '10',
          unit_totals: {
            subtotal: '900',
            tax: '100',
            total: '1000',
            discount: '10',
          },
          product: {
            id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
            name: 'Ezekiel',
            description: 'spargo crux videlicet fugit tyrannus curatio coma stillicidium esse bardus',
            type: 'custom',
            tax_category: 'digital-goods',
            image_url: 'https://loremflickr.com/640/480?lock=7909378724200448',
            custom_data: { customer_reference_id: 'abcd1234' },
            status: 'active',
            created_at: '2024-10-12T07:20:50.52Z',
            updated_at: '2024-10-12T07:20:50.52Z',
          },
        },
      ],
    },
  },
  recurring_transaction_details: {
    totals: {
      balance: '1000',
      total: '1000',
      grand_total: '1000',
      tax: '1000',
      currency_code: 'USD',
      credit: '1000',
      fee: '1000',
      discount: '1000',
      credit_to_balance: '1000',
      earnings: '1000',
      subtotal: '1000',
    },
    tax_rates_used: [
      {
        tax_rate: '1000',
        totals: {
          subtotal: '900',
          tax: '100',
          total: '1000',
          discount: '10',
        },
      },
    ],
    line_items: [
      {
        price_id: 'pri_1234',
        quantity: 10,
        totals: {
          subtotal: '900',
          tax: '100',
          total: '1000',
          discount: '10',
        },
        tax_rate: '10',
        unit_totals: {
          subtotal: '900',
          tax: '100',
          total: '1000',
          discount: '10',
        },
        product: {
          id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
          name: 'Ezekiel',
          description: 'spargo crux videlicet fugit tyrannus curatio coma stillicidium esse bardus',
          type: 'custom',
          tax_category: 'digital-goods',
          image_url: 'https://loremflickr.com/640/480?lock=7909378724200448',
          custom_data: { customer_reference_id: 'abcd1234' },
          status: 'active',
          created_at: '2024-10-12T07:20:50.52Z',
          updated_at: '2024-10-12T07:20:50.52Z',
        },
      },
    ],
  },
};

export const SubscriptionPreviewMock: ISubscriptionPreviewResponse = {
  status: 'active',
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  address_id: 'add_01gm302t81w94gyjpjpqypkzkf',
  business_id: 'biz_01grrebrzaee2qj2fqqhmcyzaj',
  currency_code: 'USD',
  created_at: '2024-10-12T07:20:50.52Z',
  updated_at: '2024-10-13T07:20:50.52Z',
  started_at: '2024-10-12T07:20:50.52Z',
  first_billed_at: '2024-10-12T07:20:50.52Z',
  next_billed_at: '2024-10-12T07:20:50.52Z',
  paused_at: '2024-10-12T07:20:50.52Z',
  canceled_at: '2024-10-12T07:20:50.52Z',
  discount: {
    id: 'dsc_01gv5kpg05xp104ek2fmgjwttf',
    starts_at: null,
    ends_at: null,
  },
  collection_mode: 'automatic',
  billing_details: {
    enable_checkout: true,
    purchase_order_number: 'NO_VALUE',
    additional_information: 'NO_VALUE',
    payment_terms: { interval: 'day', frequency: 10 },
  },
  current_billing_period: { starts_at: '2024-10-12T07:20:50.52Z', ends_at: '2024-10-12T07:20:50.52Z' },
  billing_cycle: { interval: 'day', frequency: 10 },
  scheduled_change: { action: 'cancel', effective_at: '2024-10-12T07:20:50.52Z', resume_at: '2024-10-12T07:20:50.52Z' },
  management_urls: {
    update_payment_method:
      'https://buyer-portal.paddle.com/subscriptions/sub_01gtewvbsyeqyhtp2vtc2mctq8/update-payment-method?token=',
    cancel: 'https://buyer-portal.paddle.com/subscriptions/sub_01gtewvbsyeqyhtp2vtc2mctq8/cancel?token=',
  },
  items: [
    {
      status: 'active',
      quantity: 10,
      recurring: true,
      created_at: '2024-10-12T07:20:50.52Z',
      updated_at: '2024-10-13T07:20:50.52Z',
      previously_billed_at: '2024-10-12T07:20:50.52Z',
      next_billed_at: '2024-10-12T07:20:50.52Z',
      trial_dates: { starts_at: '2024-10-12T07:20:50.52Z', ends_at: '2024-10-12T07:20:50.52Z' },
      price: {
        id: 'pri_01gsz8x8sawmvhz1pv30nge1ke',
        product_id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
        type: 'standard',
        description: 'Monthly (per seat)',
        name: 'Monthly (per seat)',
        tax_mode: 'account_setting',
        billing_cycle: {
          frequency: 1,
          interval: 'month',
        },
        trial_period: null,
        unit_price: {
          amount: '3000',
          currency_code: 'USD',
        },
        unit_price_overrides: [],
        custom_data: {
          features: {
            crm: true,
            data_retention: false,
            reports: true,
          },
          suggested_addons: ['pro_01h1vjes1y163xfj1rh1tkfb65', 'pro_01gsz97mq9pa4fkyy0wqenepkz'],
          upgrade_description:
            "Move from Basic to Pro to take advantage of advanced reporting and a CRM that's right where you're chatting.",
        },
        status: 'active',
        quantity: {
          minimum: 1,
          maximum: 999,
        },
        import_meta: null,
        created_at: '2024-10-12T07:20:50.52Z',
        updated_at: '2024-10-12T07:20:50.52Z',
      },
      product: {
        id: 'pro_01gsz4t5hdjse780zja8vvr7jg',
        name: 'AeroEdit Pro',
        type: 'standard',
        tax_category: 'standard',
        description:
          'Designed for professional pilots, including all features plus in Basic plus compliance monitoring, route optimization, and third-party integrations.',
        image_url: 'https://paddle.s3.amazonaws.com/user/165798/bT1XUOJAQhOUxGs83cbk_pro.png',
        custom_data: {
          features: {
            aircraft_performance: true,
            compliance_monitoring: true,
            flight_log_management: true,
            payment_by_invoice: false,
            route_planning: true,
            sso: false,
          },
          suggested_addons: ['pro_01h1vjes1y163xfj1rh1tkfb65', 'pro_01gsz97mq9pa4fkyy0wqenepkz'],
          upgrade_description:
            'Move from Basic to Pro to take advantage of aircraft performance, advanced route planning, and compliance monitoring.',
        },
        status: 'active',
        import_meta: null,
        created_at: '2023-02-23T12:43:46.605Z',
        updated_at: '2024-04-05T15:53:44.687Z',
      },
    },
  ],
  custom_data: { customer_reference_id: 'abcd1234' },
  import_meta: { external_id: '9b95b0b8-e10f-441a-862e-1936a6d818ab', imported_from: 'billing_platform' },
  immediate_transaction: {
    adjustments: [
      {
        items: [
          {
            amount: '1000',
            id: 'adj_1234',
            item_id: '1234',
            proration: {
              billing_period: {
                starts_at: '2024-10-12T07:20:50.52Z',
                ends_at: '2024-11-12T07:20:50.52Z',
              },
              rate: '10',
            },
            totals: {
              subtotal: '100',
              total: '150',
              tax: '50',
            },
            type: 'full',
          },
        ],
        totals: {
          currency_code: 'USD',
          earnings: '1000',
          tax: '100',
          total: '100000',
          fee: '200',
          subtotal: '500',
        },
        transaction_id: 'txn_1234',
      },
    ],
    billing_period: {
      starts_at: '2024-10-12T07:20:50.52Z',
      ends_at: '2024-11-12T07:20:50.52Z',
    },
    details: {
      totals: {
        balance: '1000',
        total: '1000',
        grand_total: '1000',
        tax: '1000',
        currency_code: 'USD',
        credit: '1000',
        fee: '1000',
        discount: '1000',
        credit_to_balance: '1000',
        earnings: '1000',
        subtotal: '1000',
      },
      tax_rates_used: [
        {
          tax_rate: '1000',
          totals: {
            subtotal: '900',
            tax: '100',
            total: '1000',
            discount: '10',
          },
        },
      ],
      line_items: [
        {
          price_id: 'pri_1234',
          quantity: 10,
          totals: {
            subtotal: '900',
            tax: '100',
            total: '1000',
            discount: '10',
          },
          tax_rate: '10',
          unit_totals: {
            subtotal: '900',
            tax: '100',
            total: '1000',
            discount: '10',
          },
          product: {
            id: 'pro_01gsz97mq9pa4fkyy0wqenepkz',
            name: 'Ezekiel',
            description: 'spargo crux videlicet fugit tyrannus curatio coma stillicidium esse bardus',
            type: 'custom',
            tax_category: 'digital-goods',
            image_url: 'https://loremflickr.com/640/480?lock=7909378724200448',
            custom_data: { customer_reference_id: 'abcd1234' },
            status: 'active',
            created_at: '2024-10-12T07:20:50.52Z',
            updated_at: '2024-10-12T07:20:50.52Z',
          },
        },
      ],
    },
  },
  update_summary: {
    charge: {
      amount: '1000',
      currency_code: 'USD',
    },
    credit: {
      amount: '0',
      currency_code: 'USD',
    },
    result: {
      action: 'credit',
      amount: '1000',
      currency_code: 'USD',
    },
  },
};

export const SubscriptionMockResponse: Response<ISubscriptionResponse> = {
  data: SubscriptionMock,
  meta: {
    request_id: '',
  },
};

export const SubscriptionPreviewMockResponse: Response<ISubscriptionPreviewResponse> = {
  data: SubscriptionPreviewMock,
  meta: {
    request_id: '',
  },
};

export const ListSubscriptionMockResponse: ResponsePaginated<ISubscriptionResponse> = {
  data: [SubscriptionMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/subscriptions?after=1',
      per_page: 10,
    },
  },
};
