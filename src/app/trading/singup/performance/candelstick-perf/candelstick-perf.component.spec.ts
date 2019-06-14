import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandelstickPerfComponent } from './candelstick-perf.component';

describe('CandelstickPerfComponent', () => {
  let component: CandelstickPerfComponent;
  let fixture: ComponentFixture<CandelstickPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandelstickPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandelstickPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
