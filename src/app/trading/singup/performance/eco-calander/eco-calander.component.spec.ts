import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoCalanderComponent } from './eco-calander.component';

describe('EcoCalanderComponent', () => {
  let component: EcoCalanderComponent;
  let fixture: ComponentFixture<EcoCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
