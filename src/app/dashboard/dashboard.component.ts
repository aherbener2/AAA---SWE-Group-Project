import { Component, OnInit } from '@angular/core';
import { TutorService } from '../services/tutor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  content: string
  
  constructor(/*private tutorService: TutorService*/) { }

  ngOnInit() {
    /*this.tutorService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
  }

}
