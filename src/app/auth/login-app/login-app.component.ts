import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {
  allTouched: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  loginSubmit(loginForm: any) {
    if (loginForm.valid) {
      console.log(loginForm);
    } else {
      this.allTouched = true;
    }
  }
}
