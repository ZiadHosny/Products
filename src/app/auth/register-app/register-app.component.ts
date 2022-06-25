import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-app',
  templateUrl: './register-app.component.html',
  styleUrls: ['./register-app.component.scss'],
})
export class RegisterAppComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/),
      ],
    ],
    userName: ['', [Validators.required, Validators.pattern(/^\S+$/)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    addressArray: this.fb.array([]),
  });

  newAddress(): FormGroup {
    return this.fb.group({
      address: [
        'StAlexStreet',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)],
      ],
      street: [
        'street',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)],
      ],
      city: ['Alex', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      country: [
        'Egypt',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)],
      ],
    });
  }

  removeAddress(i: number) {
    this.addressArray.removeAt(i);
  }

  get controlValidation() {
    return this.registerForm.controls;
  }

  get addressArray(): FormArray {
    return this.registerForm.get('addressArray') as FormArray;
  }

  addAddress() {
    this.addressArray.push(this.newAddress());
  }

  allTouched: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  registerSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
    } else {
      this.allTouched = true;
    }
  }
}
