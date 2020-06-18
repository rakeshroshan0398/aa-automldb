import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDABivariateComponent } from './eda-bivariate.component';

describe('EDABivariateComponent', () => {
  let component: EDABivariateComponent;
  let fixture: ComponentFixture<EDABivariateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDABivariateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDABivariateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
