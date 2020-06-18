import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEngineeringComponent } from './feature-engineering.component';

describe('FeatureEngineeringComponent', () => {
  let component: FeatureEngineeringComponent;
  let fixture: ComponentFixture<FeatureEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
