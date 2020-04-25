import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { Subject, Observable } from 'rxjs';
import { Tutor } from 'src/app/models/tutor';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  content: '';
  courses: Course[];

  constructor(private tutorService: TutorService, private courseService: CourseService) { }

  tutorsArray: any[] = [];

  tutors:Observable<Tutor[]>;
  tutor: Tutor=new Tutor();
  deleteMessage=false;
  tutorList:any;
  isUpdated=false;

  ngOnInit(): void {

    this.isUpdated = true;

    this.tutorService.getTutorList().subscribe(data => {
      this.tutors= data;
    })
    
    /*this.tutorService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/

    this.courses = this.courseService.getAllCourses();
    
  }

  updateTutor(id:String) {
    this.tutorService.getTutor(id).subscribe(data => {
      this.tutorList=data
      },
      error => console.log(error));
  }

  //only allow user to update their name and password
  tutorUpdateForm = new FormGroup({
    pantherId:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  });

  //update tutor using the methods to get the values from the form
  updateTutorValues(updateTutorValues) {
    this.tutor=new Tutor();
    this.tutor.pantherId=this.pantherId.value;
    this.tutor.firstName=this.firstName.value;
    this.tutor.lastName=this.lastName.value;
    this.tutor.email=this.email.value;
    this.tutor.password=this.password.value;
    
      this.tutorService.updateTutor(this.tutor.pantherId, this.tutor).subscribe( data => {
      this.isUpdated=true;
      this.tutorService.getTutorList().subscribe( data => {
        this.tutors = data
      })
    }),
      error => console.log(error);
  }

  
  public get pantherId() {
    return this.tutorUpdateForm.get('pantherId');
  }

  
  public get firstName() {
    return this.tutorUpdateForm.get('firstName');
  }

  
  public get lastName() {
    return this.tutorUpdateForm.get('lastName');
  }

  
  public get email() {
    return this.tutorUpdateForm.get('email');
  }

  
  public get password() {
    return this.tutorUpdateForm.get('password');
  }
}
  
