import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TrackingService } from './services/tracking.service';
import { TrackingSearchComponent } from './tracking-search/tracking-search.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TrackingSearchComponent,
    TrackingListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    TrackingService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
