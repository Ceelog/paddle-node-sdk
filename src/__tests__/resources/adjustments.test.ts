/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { getPaddleTestClient } from '../helpers/test-client.js';
import {
  AdjustmentMock,
  AdjustmentMockResponse,
  CreateAdjustmentExpectation,
  CreateAdjustmentMock,
  ListAdjustmentMockResponse,
} from '../mocks/resources/adjustments.mock.js';
import { AdjustmentsResource, ListAdjustmentQueryParameters } from '../../resources/index.js';
import { convertToSnakeCase } from '../../internal/index.js';

describe('AdjustmentsResource', () => {
  test('should return a list of adjustments', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListAdjustmentMockResponse);

    const adjustmentsResource = new AdjustmentsResource(paddleInstance);
    const adjustmentCollection = adjustmentsResource.list();

    let adjustments = await adjustmentCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/adjustments?');
    expect(adjustments.length).toBe(1);

    adjustments = await adjustmentCollection.next();
    expect(paddleInstance.get).toBeCalledWith('/adjustments?after=1');
    expect(adjustments.length).toBe(1);
  });

  test('should accept query params and return a list of adjustments', async () => {
    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(ListAdjustmentMockResponse);
    const adjustmentsResource = new AdjustmentsResource(paddleInstance);
    const queryParams: ListAdjustmentQueryParameters = {
      after: '2',
      id: ['1234'],
    };

    const adjustmentCollection = adjustmentsResource.list(queryParams);
    let adjustments = await adjustmentCollection.next();

    expect(paddleInstance.get).toBeCalledWith('/adjustments?after=2&id=1234');
    expect(adjustments.length).toBe(1);
  });

  test('should create a new adjustment', async () => {
    const newAdjustment = CreateAdjustmentMock;
    const paddleInstance = getPaddleTestClient();

    paddleInstance.post = jest.fn().mockResolvedValue(AdjustmentMockResponse);
    const adjustmentsResource = new AdjustmentsResource(paddleInstance);
    const createdAdjustment = await adjustmentsResource.create(newAdjustment);

    expect(paddleInstance.post).toBeCalledWith(`/adjustments`, newAdjustment);
    expect(createdAdjustment).toBeDefined();
    expect(createdAdjustment.id).toBeDefined();

    expect(convertToSnakeCase(CreateAdjustmentMock)).toEqual(CreateAdjustmentExpectation);
  });

  test('should get an link to download credit note PDF for an adjustment', async () => {
    const adjustmentId = AdjustmentMock.id;

    const paddleInstance = getPaddleTestClient();
    paddleInstance.get = jest.fn().mockResolvedValue(AdjustmentMockResponse);

    const adjustmentResponse = new AdjustmentsResource(paddleInstance);
    const creditNotePDF = await adjustmentResponse.getCreditNotePDF(adjustmentId);

    expect(paddleInstance.get).toBeCalledWith(`/adjustments/${adjustmentId}/credit-note?`);
    expect(creditNotePDF).toBeDefined();
  });
});
