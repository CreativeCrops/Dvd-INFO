import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login7Component } from './login7.component';

describe('Login7Component', () => {
  let component: Login7Component;
  let fixture: ComponentFixture<Login7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
