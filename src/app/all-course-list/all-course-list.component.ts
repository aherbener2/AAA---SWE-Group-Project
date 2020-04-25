import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-all-course-list',
  templateUrl: './all-course-list.component.html',
  styleUrls: ['./all-course-list.component.css']
})
export class AllCourseListComponent implements OnInit {
  course: Course;
  courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getAllCourses();
  }

}
