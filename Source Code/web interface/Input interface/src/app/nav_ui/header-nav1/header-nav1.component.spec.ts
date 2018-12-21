import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNav1Component } from './header-nav1.component';

describe('HeaderNav1Component', () => {
  let component: HeaderNav1Component;
  let fixture: ComponentFixture<HeaderNav1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNav1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
