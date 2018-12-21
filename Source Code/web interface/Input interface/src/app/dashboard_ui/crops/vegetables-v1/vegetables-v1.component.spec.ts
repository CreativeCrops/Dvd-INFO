import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesV1Component } from './vegetables-v1.component';

describe('VegetablesV1Component', () => {
  let component: VegetablesV1Component;
  let fixture: ComponentFixture<VegetablesV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetablesV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetablesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
