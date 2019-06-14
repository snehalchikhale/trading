import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundFontComponent } from './background-font.component';

describe('BackgroundFontComponent', () => {
  let component: BackgroundFontComponent;
  let fixture: ComponentFixture<BackgroundFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
