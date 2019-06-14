import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudyComponent } from './chart-study.component';

describe('ChartStudyComponent', () => {
  let component: ChartStudyComponent;
  let fixture: ComponentFixture<ChartStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
