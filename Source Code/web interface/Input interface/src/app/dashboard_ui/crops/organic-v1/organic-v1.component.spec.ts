import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicV1Component } from './organic-v1.component';

describe('OrganicV1Component', () => {
  let component: OrganicV1Component;
  let fixture: ComponentFixture<OrganicV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
