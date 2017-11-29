import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrackingSearchComponent } from './tracking-search/tracking-search.component';
import { TrackingListComponent } from './tracking-list/tracking-list.component';

const routes: Routes = [
  { path: 'search', component: TrackingSearchComponent },
  { path: 'deliveries/:uid', component: TrackingListComponent },
  { path: '**', redirectTo: 'search', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
