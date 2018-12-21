import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpicesV1Component } from './spices-v1.component';

describe('SpicesV1Component', () => {
  let component: SpicesV1Component;
  let fixture: ComponentFixture<SpicesV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicesV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
