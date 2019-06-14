import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsNewsComponent } from './visitors-news.component';

describe('VisitorsNewsComponent', () => {
  let component: VisitorsNewsComponent;
  let fixture: ComponentFixture<VisitorsNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
