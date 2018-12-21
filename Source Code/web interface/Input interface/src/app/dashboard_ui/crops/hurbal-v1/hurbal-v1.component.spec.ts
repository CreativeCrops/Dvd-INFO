import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HurbalV1Component } from './hurbal-v1.component';

describe('HurbalV1Component', () => {
  let component: HurbalV1Component;
  let fixture: ComponentFixture<HurbalV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurbalV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HurbalV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
