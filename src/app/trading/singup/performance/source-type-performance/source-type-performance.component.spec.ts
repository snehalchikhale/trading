import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceTypePerformanceComponent } from './source-type-performance.component';

describe('SourceTypePerformanceComponent', () => {
  let component: SourceTypePerformanceComponent;
  let fixture: ComponentFixture<SourceTypePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceTypePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceTypePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
