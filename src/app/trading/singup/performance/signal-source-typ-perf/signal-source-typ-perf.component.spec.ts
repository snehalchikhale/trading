import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalSourceTypPerfComponent } from './signal-source-typ-perf.component';

describe('SignalSourceTypPerfComponent', () => {
  let component: SignalSourceTypPerfComponent;
  let fixture: ComponentFixture<SignalSourceTypPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalSourceTypPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalSourceTypPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
