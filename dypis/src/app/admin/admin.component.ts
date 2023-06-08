import { Component } from '@angular/core';
import { AuthService } from './sign-in/auth.service';

@Component({
  selector: 'admin',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      div {
        padding: 196px 60px 114px 60px;
      }
    `,
  ],
})
export class AdminComponent {
  constructor(private authService: AuthService) {
    this.authService.autoLogin();
  }
}
