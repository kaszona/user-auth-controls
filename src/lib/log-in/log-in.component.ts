import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'kaszona-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm!: FormGroup;

   isLoginError?: boolean = false;

  constructor(private fb: FormBuilder, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  OnSubmit() {
    const login = this.loginForm.value;
    this.userService.userAuth(login.username, login.password).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.access_token);
        this.router.navigate(['/']);
      },
      () => {
        this.isLoginError = true;
      });
  }

}
