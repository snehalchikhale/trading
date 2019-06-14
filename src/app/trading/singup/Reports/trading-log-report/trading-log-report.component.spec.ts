import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingLogReportComponent } from './trading-log-report.component';

describe('TradingLogReportComponent', () => {
  let component: TradingLogReportComponent;
  let fixture: ComponentFixture<TradingLogReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingLogReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingLogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
