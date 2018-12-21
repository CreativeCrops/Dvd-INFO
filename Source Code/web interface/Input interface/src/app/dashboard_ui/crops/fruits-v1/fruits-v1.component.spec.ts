import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsV1Component } from './fruits-v1.component';

describe('FruitsV1Component', () => {
  let component: FruitsV1Component;
  let fixture: ComponentFixture<FruitsV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
