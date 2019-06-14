import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologyPerfComponent } from './psychology-perf.component';

describe('PsychologyPerfComponent', () => {
  let component: PsychologyPerfComponent;
  let fixture: ComponentFixture<PsychologyPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychologyPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologyPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
