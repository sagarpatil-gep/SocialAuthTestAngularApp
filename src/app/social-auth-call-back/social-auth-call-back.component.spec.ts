import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAuthCallBackComponent } from './social-auth-call-back.component';

describe('SocialAuthCallBackComponent', () => {
  let component: SocialAuthCallBackComponent;
  let fixture: ComponentFixture<SocialAuthCallBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAuthCallBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAuthCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
