/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { Event } from '../../../entities/events/event.js';
import { EventName } from '../../helpers/index.js';
import { SubscriptionNotification } from '../../entities/index.js';
import { type IEventsResponse } from '../../../types/index.js';
import { type ISubscriptionNotificationResponse } from '../../types/index.js';

export class SubscriptionResumedEvent extends Event {
  public override readonly eventType = EventName.SubscriptionResumed;
  public override readonly data: Omit<SubscriptionNotification, 'transactionId'>;

  constructor(response: IEventsResponse<ISubscriptionNotificationResponse>) {
    super(response);
    this.data = new SubscriptionNotification(response.data);
  }
}
