import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorblogsComponent } from './visitorblogs.component';

describe('VisitorblogsComponent', () => {
  let component: VisitorblogsComponent;
  let fixture: ComponentFixture<VisitorblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
