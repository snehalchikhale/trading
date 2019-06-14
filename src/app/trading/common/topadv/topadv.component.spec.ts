import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopadvComponent } from './topadv.component';

describe('TopadvComponent', () => {
  let component: TopadvComponent;
  let fixture: ComponentFixture<TopadvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopadvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopadvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
