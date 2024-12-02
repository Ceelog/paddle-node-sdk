/**
 *  ! Autogenerated code !
 *  Do not make changes to this file.
 *  Changes may be overwritten as part of auto-generation.
 */

import { type EventEntity, type IEventName, Webhooks } from '../../notifications/index.js';
import { type NotificationStatus, type Origin } from '../../enums/index.js';
import { type INotificationResponse } from '../../types/index.js';

export class Notification {
  public readonly id: string;
  public readonly type: IEventName;
  public readonly status: NotificationStatus;
  public readonly payload: EventEntity;
  public readonly occurredAt: string;
  public readonly deliveredAt: null | string;
  public readonly replayedAt: null | string;
  public readonly origin: Origin;
  public readonly lastAttemptAt: null | string;
  public readonly retryAt: null | string;
  public readonly timesAttempted: number;
  public readonly notificationSettingId: string;

  constructor(notificationResponse: INotificationResponse) {
    this.id = notificationResponse.id;
    this.type = notificationResponse.type;
    this.status = notificationResponse.status;
    this.payload = Webhooks.fromJson(notificationResponse.payload);
    this.occurredAt = notificationResponse.occurred_at;
    this.deliveredAt = notificationResponse.delivered_at ?? null;
    this.replayedAt = notificationResponse.replayed_at ?? null;
    this.origin = notificationResponse.origin;
    this.lastAttemptAt = notificationResponse.last_attempt_at ?? null;
    this.retryAt = notificationResponse.retry_at ?? null;
    this.timesAttempted = notificationResponse.times_attempted;
    this.notificationSettingId = notificationResponse.notification_setting_id;
  }
}
