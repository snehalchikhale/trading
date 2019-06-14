import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenubarComponent } from './submenubar.component';

describe('SubmenubarComponent', () => {
  let component: SubmenubarComponent;
  let fixture: ComponentFixture<SubmenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
