import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdaBubblechartComponent } from './eda-bubblechart.component';

describe('EdaBubblechartComponent', () => {
  let component: EdaBubblechartComponent;
  let fixture: ComponentFixture<EdaBubblechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdaBubblechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdaBubblechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
