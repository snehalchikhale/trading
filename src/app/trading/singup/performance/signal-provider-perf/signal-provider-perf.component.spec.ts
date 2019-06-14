import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalProviderPerfComponent } from './signal-provider-perf.component';

describe('SignalProviderPerfComponent', () => {
  let component: SignalProviderPerfComponent;
  let fixture: ComponentFixture<SignalProviderPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalProviderPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalProviderPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
