import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {
  allTouched: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginSubmit(loginForm: any) {
    if (loginForm.valid) {
      localStorage['token'] = loginForm.controls.email.value;
      this.router.navigate(['']);
    } else {
      this.allTouched = true;
    }
  }
}
