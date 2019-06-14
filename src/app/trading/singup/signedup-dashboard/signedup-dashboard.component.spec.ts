import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedupDashboardComponent } from './signedup-dashboard.component';

describe('SignedupDashboardComponent', () => {
  let component: SignedupDashboardComponent;
  let fixture: ComponentFixture<SignedupDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedupDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
