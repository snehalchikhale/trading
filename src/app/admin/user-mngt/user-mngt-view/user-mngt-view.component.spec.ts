import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMngtViewComponent } from './user-mngt-view.component';

describe('UserMngtViewComponent', () => {
  let component: UserMngtViewComponent;
  let fixture: ComponentFixture<UserMngtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMngtViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMngtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
