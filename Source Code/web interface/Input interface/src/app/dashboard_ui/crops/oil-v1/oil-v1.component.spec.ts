import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OilV1Component } from './oil-v1.component';

describe('OilV1Component', () => {
  let component: OilV1Component;
  let fixture: ComponentFixture<OilV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OilV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
