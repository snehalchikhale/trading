import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigneduserBlogComponent } from './signeduser-blog.component';

describe('SigneduserBlogComponent', () => {
  let component: SigneduserBlogComponent;
  let fixture: ComponentFixture<SigneduserBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigneduserBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigneduserBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
