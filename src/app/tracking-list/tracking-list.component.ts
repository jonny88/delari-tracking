import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DeliveryEntry } from '../models/delivery-entry';
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

  constructor(
    private trackingService: TrackingService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  ngOnInit() {
    const uid = +this.route.snapshot.paramMap.get('uid');
    this.deliveryEntries = this.trackingService.fetchDeliveryEntries(this.uid);
  }

  goBack(): void {
    this.location.back();
  }

}
