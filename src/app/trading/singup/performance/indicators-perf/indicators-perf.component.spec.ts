import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorsPerfComponent } from './indicators-perf.component';

describe('IndicatorsPerfComponent', () => {
  let component: IndicatorsPerfComponent;
  let fixture: ComponentFixture<IndicatorsPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorsPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorsPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
