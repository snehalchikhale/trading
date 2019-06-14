import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceSocialsComponent } from './performance-socials.component';

describe('PerformanceSocialsComponent', () => {
  let component: PerformanceSocialsComponent;
  let fixture: ComponentFixture<PerformanceSocialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceSocialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
