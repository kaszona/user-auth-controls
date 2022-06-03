import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPasswordLoginControlComponent } from './user-password-login-control/user-password-login-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { components } from './components';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [UserPasswordLoginControlComponent],
  exports:[...components]
})
export class UserAuthControlsModule {}
