import { Injectable } from '@angular/core';
import { DeliveryEntry } from '../models/delivery-entry';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TrackingService {

  fetchDeliveryEntries(uid: number): Observable<DeliveryEntry[]> {
    return of(DELIVERY_ENTRIES_MOCK);
  }

}

const DELIVERY_ENTRIES_MOCK: DeliveryEntry[] = [
  { creationTimestamp : new Date(1991, 12, 1), trackingNumber : "12347654" },
  { creationTimestamp : new Date('01/02/1991'), trackingNumber : "1234567" },
]
