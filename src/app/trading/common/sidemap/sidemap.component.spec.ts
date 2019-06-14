import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemapComponent } from './sidemap.component';

describe('SidemapComponent', () => {
  let component: SidemapComponent;
  let fixture: ComponentFixture<SidemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
