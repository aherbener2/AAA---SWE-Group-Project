/*
  binds signup form data to AuthService.signup() which 
  returns an Observable object
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TutorService } from '../services/tutor.service';
import { Tutor } from '../models/tutor';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private tutorService: TutorService){}

  tutor: Tutor=new Tutor();
  submitted = false;

  ngOnInit() {
    this.submitted = false;
  }

  tutorSaveForm = new FormGroup({
    tutorPantherId: new FormControl('', [Validators.required, Validators.minLength(9)]),
    tutorFirstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    tutorLastName: new FormControl('', [Validators.minLength(2)]),
    tutorEmail: new FormControl('', [Validators.required, Validators.email]),
    tutorPassword: new FormControl('', Validators.required)
  })

  saveTutor(saveTutor) {
    this.tutor = new Tutor();
    this.tutor.pantherId=this.pantherId.value;
    this.tutor.firstName=this.tutorFirstName.value;
    this.tutor.lastName=this.tutorLastName.value;
    this.tutor.email=this.tutorEmail.value;
    this.tutor.password=this.tutorPassword.value;
    this.submitted = true;
    this.save();
  }

  save() {
    this.tutorService.createTutor(this.tutor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tutor = new Tutor();
  }

  
  public get pantherId() {
    return this.tutorSaveForm.get('tutorPantherId');
  }
  
  public get tutorFirstName() {
    return this.tutorSaveForm.get('tutorFirstName');
  }
  public get tutorLastName() {
    return this.tutorSaveForm.get('tutorLastName');
  }
  
  public get tutorEmail() {
    return this.tutorSaveForm.get('tutorEmail');
  }

  public get tutorPassword() {
    return this.tutorSaveForm.get('tutorPassword');
  }

  addTutorForm() {
    this.submitted = false;
    this.tutorSaveForm.reset();
  }

  /*form: any = {};
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
  }*/

}

