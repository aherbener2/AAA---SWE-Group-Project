import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from '../models/course';
import { Data } from '../models/data';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    data: Data = new Data();
    courses: Course[] = [];
    
    constructor() {
        //assign tutors to courses and compile into courses array
        this.data.swe.tutors = [this.data.john, this.data.mary];
        this.data.intro1.tutors = [this.data.john, this.data.mary, this.data.raj];
        this.data.intro2.tutors = [this.data.john, this.data.mary, this.data.raj];
        this.data.theoretics.tutors = [this.data.john, this.data.sam];
        this.data.compOrg.tutors = [this.data.sam];
        this.data.syslevel.tutors = [this.data.mary, this.data.raj];
        this.data.dataStruct.tutors = [this.data.raj, this.data.john,  this.data.mary, this.data.sam];
        this.data.algorithms.tutors = [this.data.sam, this.data.raj];


        this.courses = [this.data.swe, this.data.intro1, this.data.intro2, this.data.theoretics, this.data.compOrg, this.data.syslevel, this.data.dataStruct, this.data.algorithms];
    }
    
    //return all courses
    getAllCourses() {
        return this.courses;
    }

    //return a course
    getCourse(id: string) {
        let c: Course;
        this.courses.forEach(course => {
            if(course.id == id) {
                c = course;
            }
        });
        return c;
    }
}