/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { CreateAddressRequestBody, UpdateAddressRequestBody } from '../../../resources/index.js';
import { IAddressResponse } from '../../../types/index.js';
import { Response, ResponsePaginated } from '../../../internal/index.js';

export const CreateAddressMock: CreateAddressRequestBody = {
  countryCode: 'AD',
};

export const CreateAddressExpectation = {
  country_code: 'AD',
};

export const UpdateAddressMock: UpdateAddressRequestBody = {
  description: 'Paddle.com',
  firstLine: '3811 Ditmars Blvd',
  secondLine: 'Suite 435',
  city: 'Astoria',
  postalCode: '11105-1803',
  region: 'NY',
  countryCode: 'AD',
  customData: { customer_reference_id: 'abcd1234' },
  status: 'active',
};

export const UpdateAddressExpectation = {
  description: 'Paddle.com',
  first_line: '3811 Ditmars Blvd',
  second_line: 'Suite 435',
  city: 'Astoria',
  postal_code: '11105-1803',
  region: 'NY',
  country_code: 'AD',
  custom_data: { customer_reference_id: 'abcd1234' },
  status: 'active',
};

export const AddressMock: IAddressResponse = {
  id: 'add_01gm302t81w94gyjpjpqypkzkf',
  customer_id: 'ctm_01grnn4zta5a1mf02jjze7y2ys',
  description: 'Paddle.com',
  first_line: '3811 Ditmars Blvd',
  second_line: 'Suite 671',
  city: 'Astoria',
  postal_code: '11105-1803',
  region: 'NY',
  country_code: 'AD',
  custom_data: { customer_reference_id: 'abcd1234' },
  status: 'active',
  created_at: '2024-10-12T07:20:50.52Z',
  updated_at: '2024-10-13T07:20:50.52Z',
  import_meta: { external_id: '9b95b0b8-e10f-441a-862e-1936a6d818ab', imported_from: 'billing_platform' },
};

export const AddressMockResponse: Response<IAddressResponse> = {
  data: AddressMock,
  meta: {
    request_id: '',
  },
};

export const ListAddressMockResponse: ResponsePaginated<IAddressResponse> = {
  data: [AddressMock],
  meta: {
    request_id: '',
    pagination: {
      estimated_total: 10,
      has_more: true,
      next: '/addresss?after=1',
      per_page: 10,
    },
  },
};
