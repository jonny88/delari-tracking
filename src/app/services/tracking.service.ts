import { Injectable } from '@angular/core';
import { DeliveryEntry } from '../models/delivery-entry';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TrackingService {

  fetchDeliveryEntries(uid: number): Observable<DeliveryEntry[]> {
    let result = DELIVERY_ENTRIES_MOCK.filter(e => e.user.id === uid);
    if (result.length > 0) {
      return of(result[0].deliveryEntries);
    }
    return of([]);
  }

  getUsers(searchName: string): Observable<User[]> {
    return of(DELIVERY_ENTRIES_MOCK.map(e => e.user).filter(u => u.name === searchName));
  }

}

const DELIVERY_ENTRIES_MOCK  =  [
  {
    user: { id: 1, name: "Jonny", surname: "Rocket" },
    deliveryEntries: [
      { creationTimestamp: new Date(1991, 12, 1), trackingNumber: "12347654" },
      { creationTimestamp: new Date('01/02/1991'), trackingNumber: "1234567" },
    ]
  },
  {
    user: { id: 2, name: "Jiali", surname: "Rocket" },
    deliveryEntries: [
      { creationTimestamp: new Date(1998, 13, 1), trackingNumber: "333564" },
      { creationTimestamp: new Date('01/02/1992'), trackingNumber: "090909" },
      { creationTimestamp: new Date('01/03/1992'), trackingNumber: "777" },
    ]
  },
]
