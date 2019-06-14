import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingAveragesComponent } from './moving-averages.component';

describe('MovingAveragesComponent', () => {
  let component: MovingAveragesComponent;
  let fixture: ComponentFixture<MovingAveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingAveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingAveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
