import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsesV1Component } from './pulses-v1.component';

describe('PulsesV1Component', () => {
  let component: PulsesV1Component;
  let fixture: ComponentFixture<PulsesV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulsesV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
