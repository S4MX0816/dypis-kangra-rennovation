import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignIn, SignInForm } from './sign.in.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm = this.initForm();

  constructor(private readonly authService: AuthService) {}

  initForm(): FormGroup<SignInForm> {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    const payload = this.signInForm.value;
    this.authService.login(payload as SignIn);
  }
}
