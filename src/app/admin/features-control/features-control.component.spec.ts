import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesControlComponent } from './features-control.component';

describe('FeaturesControlComponent', () => {
  let component: FeaturesControlComponent;
  let fixture: ComponentFixture<FeaturesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
