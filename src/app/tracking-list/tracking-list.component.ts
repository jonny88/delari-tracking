import { Component, OnInit } from '@angular/core';
import { DeliveryEntry } from '../models/delivery-entry';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TrackingService } from '../services/tracking.service';
import { User } from '../models/user';

@Component({
  selector: 'app-tracking-list',
  templateUrl: './tracking-list.component.html',
  styleUrls: ['./tracking-list.component.css']
})
export class TrackingListComponent implements OnInit {

  uid: number;
  deliveryEntries: Observable<DeliveryEntry[]>;

  constructor(private trackingService: TrackingService) {
  }

  ngOnInit() {
    this.deliveryEntries = this.trackingService.fetchDeliveryEntries(this.uid);
  }

}
