import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '@kaszona/user-auth-service';

@Component({
  selector: 'kaszona-user-password-login-control',
  templateUrl: './user-password-login-control.component.html',
  styleUrls: ['./user-password-login-control.component.css'],
  providers: [UserService],
})
export class UserPasswordLoginControlComponent implements OnInit {
  loginForm!: FormGroup;

  isLogin!: boolean;

  @Output() loggedIn = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  OnSubmit() {
    const login = this.loginForm?.value;
    this.userService.userAuth(login.username, login.password).subscribe({
      next: () => {
        this.loggedIn.emit(true);
      },
      error: () => {
        this.loggedIn.emit(false);
      },
    });
  }
}
