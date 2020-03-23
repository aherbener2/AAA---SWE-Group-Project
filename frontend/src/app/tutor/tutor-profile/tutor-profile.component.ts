import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {

  public currentUser;

  constructor() {
    this.currentUser = localStorage.getItem('currentUser')?
      JSON.parse(localStorage.getItem('currentUser')):"";
   }

  ngOnInit(): void {
  }

}
