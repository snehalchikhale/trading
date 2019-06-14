import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedChartStudyComponent } from './revised-chart-study.component';

describe('RevisedChartStudyComponent', () => {
  let component: RevisedChartStudyComponent;
  let fixture: ComponentFixture<RevisedChartStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisedChartStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisedChartStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
