import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaterwisePerformanceComponent } from './quaterwise-performance.component';

describe('QuaterwisePerformanceComponent', () => {
  let component: QuaterwisePerformanceComponent;
  let fixture: ComponentFixture<QuaterwisePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaterwisePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaterwisePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
