/*
  binds signup form data to AuthService.signup() which 
  returns an Observable object
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

