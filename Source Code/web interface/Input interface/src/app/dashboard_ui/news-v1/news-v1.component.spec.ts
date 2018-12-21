import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsV1Component } from './news-v1.component';

describe('NewsV1Component', () => {
  let component: NewsV1Component;
  let fixture: ComponentFixture<NewsV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
