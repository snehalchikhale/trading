import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigneduserNewsComponent } from './signeduser-news.component';

describe('SigneduserNewsComponent', () => {
  let component: SigneduserNewsComponent;
  let fixture: ComponentFixture<SigneduserNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigneduserNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigneduserNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
