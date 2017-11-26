import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingSearchComponent } from './tracking-search.component';

describe('TrackingSearchComponent', () => {
  let component: TrackingSearchComponent;
  let fixture: ComponentFixture<TrackingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
