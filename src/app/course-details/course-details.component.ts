import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  
  course: Course;
  courses: Course[];
  id: string;
  name: string;

  constructor(private router: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {
    //id passed in the url used to get full data using the courseService
    this.router.params.subscribe(params => {
      this.id = params['id'];
      console.log(`id: ${this.id}`);
      this.course = this.courseService.getCourse(this.id);
      console.log(this.course);
      
    });
  }
}
