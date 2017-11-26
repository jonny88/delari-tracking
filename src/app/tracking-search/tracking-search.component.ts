import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking-search',
  templateUrl: './tracking-search.component.html',
  styleUrls: ['./tracking-search.component.css']
})
export class TrackingSearchComponent implements OnInit {

  searchInput: string;

  constructor() {
    this.searchInput = '';
  }

  search(): void {
    console.log(this.searchInput);
  }

  ngOnInit() {
  }

}
