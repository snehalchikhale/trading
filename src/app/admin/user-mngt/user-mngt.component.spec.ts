import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMngtComponent } from './user-mngt.component';

describe('UserMngtComponent', () => {
  let component: UserMngtComponent;
  let fixture: ComponentFixture<UserMngtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMngtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMngtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
