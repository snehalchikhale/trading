import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPerfComponent } from './news-perf.component';

describe('NewsPerfComponent', () => {
  let component: NewsPerfComponent;
  let fixture: ComponentFixture<NewsPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
