import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsV1Component } from './nuts-v1.component';

describe('NutsV1Component', () => {
  let component: NutsV1Component;
  let fixture: ComponentFixture<NutsV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutsV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
