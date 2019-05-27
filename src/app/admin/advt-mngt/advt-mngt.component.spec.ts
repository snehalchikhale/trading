import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvtMngtComponent } from './advt-mngt.component';

describe('AdvtMngtComponent', () => {
  let component: AdvtMngtComponent;
  let fixture: ComponentFixture<AdvtMngtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvtMngtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvtMngtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
