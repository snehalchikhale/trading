import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicalCalenderComponent } from './economical-calender.component';

describe('EconomicalCalenderComponent', () => {
  let component: EconomicalCalenderComponent;
  let fixture: ComponentFixture<EconomicalCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicalCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicalCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
