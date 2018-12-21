import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersV1Component } from './others-v1.component';

describe('OthersV1Component', () => {
  let component: OthersV1Component;
  let fixture: ComponentFixture<OthersV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
