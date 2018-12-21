import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAreaV1Component } from './map-area-v1.component';

describe('MapAreaV1Component', () => {
  let component: MapAreaV1Component;
  let fixture: ComponentFixture<MapAreaV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAreaV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAreaV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
