import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdaVisualizationComponent } from './eda-visualization.component';

describe('EdaVisualizationComponent', () => {
  let component: EdaVisualizationComponent;
  let fixture: ComponentFixture<EdaVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdaVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdaVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
