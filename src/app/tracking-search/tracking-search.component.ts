import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrackingService } from '../services/tracking.service';
import { User } from '../models/user';

@Component({
  selector: 'app-tracking-search',
  templateUrl: './tracking-search.component.html',
  styleUrls: ['./tracking-search.component.css']
})
export class TrackingSearchComponent implements OnInit {

  searchInput: string;
  validUser: boolean;

  constructor(
    private router: Router,
    private trackingService: TrackingService,
  ) {
    this.searchInput = '';
    this.validUser = true;
  }

  search(): void {
    this.trackingService.getUsers(this.searchInput).subscribe(u => {
      this.validUser = u.length > 0;
      if (this.validUser) {
        this.router.navigateByUrl('/deliveries/' + this.searchInput);
      }
    });
  }

  valueChange(): void {
    this.validUser = true;
  }

  ngOnInit() {
  }

}
