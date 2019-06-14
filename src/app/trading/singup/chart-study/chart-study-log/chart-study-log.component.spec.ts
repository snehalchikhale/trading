import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudyLogComponent } from './chart-study-log.component';

describe('ChartStudyLogComponent', () => {
  let component: ChartStudyLogComponent;
  let fixture: ComponentFixture<ChartStudyLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStudyLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStudyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
