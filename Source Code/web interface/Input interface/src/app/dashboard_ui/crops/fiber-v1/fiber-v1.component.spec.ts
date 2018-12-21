import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiberV1Component } from './fiber-v1.component';

describe('FiberV1Component', () => {
  let component: FiberV1Component;
  let fixture: ComponentFixture<FiberV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiberV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiberV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
