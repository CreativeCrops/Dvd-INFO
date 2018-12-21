import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsV1Component } from './events-v1.component';

describe('EventsV1Component', () => {
  let component: EventsV1Component;
  let fixture: ComponentFixture<EventsV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
