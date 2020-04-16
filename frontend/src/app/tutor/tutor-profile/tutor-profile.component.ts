import { Component, OnInit } from '@angular/core';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  content = '';

  constructor(private tutorService: TutorService) { }

  ngOnInit(): void {
    this.tutorService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
