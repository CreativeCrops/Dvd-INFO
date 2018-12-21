import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupV1Component } from './startup-v1.component';

describe('StartupV1Component', () => {
  let component: StartupV1Component;
  let fixture: ComponentFixture<StartupV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
