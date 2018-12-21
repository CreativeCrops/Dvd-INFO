import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropSeedV1Component } from './crop-seed-v1.component';

describe('CropSeedV1Component', () => {
  let component: CropSeedV1Component;
  let fixture: ComponentFixture<CropSeedV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropSeedV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropSeedV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
