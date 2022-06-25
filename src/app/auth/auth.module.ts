import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { RegisterAppComponent } from './register-app/register-app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { AthWrapperComponent } from './ath-wrapper/ath-wrapper.component';

@NgModule({
  declarations: [RegisterAppComponent, LoginAppComponent, AthWrapperComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
