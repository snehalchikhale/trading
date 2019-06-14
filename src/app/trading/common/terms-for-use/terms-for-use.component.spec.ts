import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsForUseComponent } from './terms-for-use.component';

describe('TermsForUseComponent', () => {
  let component: TermsForUseComponent;
  let fixture: ComponentFixture<TermsForUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsForUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsForUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
