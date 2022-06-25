import { AthWrapperComponent } from './ath-wrapper/ath-wrapper.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterAppComponent } from './register-app/register-app.component';

const routes: Routes = [
  {
    path: '',
    component: AthWrapperComponent,

    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegisterAppComponent },
      { path: 'login', component: LoginAppComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
