import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDAPandasProfileComponent } from './eda-pandas-profile.component';

describe('EDAPandasProfileComponent', () => {
  let component: EDAPandasProfileComponent;
  let fixture: ComponentFixture<EDAPandasProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDAPandasProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDAPandasProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
