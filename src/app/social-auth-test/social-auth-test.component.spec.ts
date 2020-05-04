import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthTestComponent } from './social-auth-test.component';

describe('SocialAuthTestComponent', () => {
  let component: SocialAuthTestComponent;
  let fixture: ComponentFixture<SocialAuthTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAuthTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAuthTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
