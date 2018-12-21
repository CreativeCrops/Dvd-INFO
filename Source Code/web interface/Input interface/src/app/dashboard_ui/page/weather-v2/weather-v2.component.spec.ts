import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherV2Component } from './weather-v2.component';

describe('WeatherV2Component', () => {
  let component: WeatherV2Component;
  let fixture: ComponentFixture<WeatherV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
