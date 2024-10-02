import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login(role: string) {
    if (role === 'user' && this.username === 'user' && this.password === 'user123') {
      this.router.navigate(['/user-dashboard']);
    } else if (role === 'admin' && this.username === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/admin-dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  onSubmit() {
    return false; 
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  navigateToPrivacySettings() {
    this.router.navigate(['/privacy-settings']);
  }
}
