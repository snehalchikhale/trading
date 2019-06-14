import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PIPCalculatorComponent } from './pip-calculator.component';

describe('PIPCalculatorComponent', () => {
  let component: PIPCalculatorComponent;
  let fixture: ComponentFixture<PIPCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PIPCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PIPCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
