import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginCalculatorComponent } from './margin-calculator.component';

describe('MarginCalculatorComponent', () => {
  let component: MarginCalculatorComponent;
  let fixture: ComponentFixture<MarginCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
