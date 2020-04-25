import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignupFailed = false;
  isSignInFailed = false;
  errorMessage = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignupSubmit() {
    this.authService.signup(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignupFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignupFailed = true;
      }
    )
  }

}
