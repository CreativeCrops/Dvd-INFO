import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login6Component } from './login6.component';

describe('Login6Component', () => {
  let component: Login6Component;
  let fixture: ComponentFixture<Login6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
