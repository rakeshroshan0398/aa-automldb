import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EDAUnivarateComponent } from './eda-univarate.component';

describe('EDAUnivarateComponent', () => {
  let component: EDAUnivarateComponent;
  let fixture: ComponentFixture<EDAUnivarateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EDAUnivarateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EDAUnivarateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
