import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandasProfilingComponent } from './pandas-profiling.component';

describe('PandasProfilingComponent', () => {
  let component: PandasProfilingComponent;
  let fixture: ComponentFixture<PandasProfilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandasProfilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandasProfilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
