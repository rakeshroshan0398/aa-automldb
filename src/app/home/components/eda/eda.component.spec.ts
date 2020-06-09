import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDAComponent } from './eda.component';

describe('EDAComponent', () => {
  let component: EDAComponent;
  let fixture: ComponentFixture<EDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
