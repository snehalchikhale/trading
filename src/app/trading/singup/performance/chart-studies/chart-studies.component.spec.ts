import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStudiesComponent } from './chart-studies.component';

describe('ChartStudiesComponent', () => {
  let component: ChartStudiesComponent;
  let fixture: ComponentFixture<ChartStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
