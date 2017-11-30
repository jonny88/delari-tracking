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

  deliveryEntries: Observable<DeliveryEntry[]>;
  user: User;

  constructor(
    private trackingService: TrackingService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  ngOnInit() {
    const name: string = this.route.snapshot.paramMap.get('name');
    console.log("fetching for " + name)
    this.trackingService.getUsers(name).subscribe(users => {
      console.log(users)
      if (users.length) {
        this.user = users[0]
        this.deliveryEntries = this.trackingService.fetchDeliveryEntries(users[0].id);
      } else {
        this.deliveryEntries = of([])
      }
    });

  }

  goBack(): void {
    this.location.back();
  }

}
