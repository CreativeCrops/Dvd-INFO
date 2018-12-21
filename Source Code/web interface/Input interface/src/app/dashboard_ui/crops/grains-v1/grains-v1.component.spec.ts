import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainsV1Component } from './grains-v1.component';

describe('GrainsV1Component', () => {
  let component: GrainsV1Component;
  let fixture: ComponentFixture<GrainsV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrainsV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrainsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
