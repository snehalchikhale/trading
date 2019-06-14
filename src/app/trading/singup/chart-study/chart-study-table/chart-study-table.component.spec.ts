import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudyTableComponent } from './chart-study-table.component';

describe('ChartStudyTableComponent', () => {
  let component: ChartStudyTableComponent;
  let fixture: ComponentFixture<ChartStudyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStudyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStudyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
