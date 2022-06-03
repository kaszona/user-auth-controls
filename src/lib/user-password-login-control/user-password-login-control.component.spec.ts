import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPasswordLoginControlComponent } from './user-password-login-control.component';

describe('UserPasswordLoginControlComponent', () => {
  let component: UserPasswordLoginControlComponent;
  let fixture: ComponentFixture<UserPasswordLoginControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPasswordLoginControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPasswordLoginControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
