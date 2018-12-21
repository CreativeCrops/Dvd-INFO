import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperV1Component } from './helper-v1.component';

describe('HelperV1Component', () => {
  let component: HelperV1Component;
  let fixture: ComponentFixture<HelperV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
