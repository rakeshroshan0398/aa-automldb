import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDAMultivariateComponent } from './eda-multivariate.component';

describe('EDAMultivariateComponent', () => {
  let component: EDAMultivariateComponent;
  let fixture: ComponentFixture<EDAMultivariateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDAMultivariateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDAMultivariateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
