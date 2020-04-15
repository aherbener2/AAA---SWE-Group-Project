import { Tutor } from './tutor';
import { Course } from './course';

export class Data {
    
    john: Tutor = {
        pantherId: "002211325",
        firstName: "John",
        lastName: "Hanes",
        email: "jhanes13@student.gsu.edu",
        password: "pass123",
        schedule: [
            {
                day: "Monday",
                time: "12-3pm" 
            },
            {
                day: "Tuesday",
                time: "4-6pm"
            }
        ]
    };

    mary: Tutor = {
        pantherId: "001234567",
        firstName: "Mary",
        lastName: "Lou",
        email: "mlou193@student.gsu.edu",
        password: "pa112233",
        schedule: [
            {
                day: "Monday",
                time: "12-3pm" 
            },
            {
                day: "Tuesday",
                time: "4-6pm"
            }
        ]
    };

    raj: Tutor = {
        pantherId: "198222676",
        firstName: "Raj",
        lastName: "Ali",
        email: "rali18@student.gsu.edu",
        password: "abcd123",
        schedule: [
            {
                day: "Wednesday",
                time: "10AM-3PM" 
            },
            {
                day: "Tuesday",
                time: "4-6pm"
            },
            {
                day: "Thursday",
                time: "10AM-3PM"
            }
        ]
    };

    swe: Course = {
        id: "csc4350",
        name: "Software Engineering",
        description: "Techniques used in large scale scientific or technical software development, including requirements analysis, specification, systems design, implementation, testing, validation, verification, and maintenance. Serves as one of the two Critical Thinking Through Writing (CTW) courses required of all computer science majors.",
        tutors: []
    };

    intro1: Course = {
        id: "csc1301",
        name: "Princles of Computer Science I",
        description: "An introduction to the discipline of computer science. Computer programming is the primary focus of the course, with secondary focus on a breadth of computer science topics. These topics include algorithmic foundations, hardware concepts, virtual machine concepts, software systems, applications, and social issues.",
        tutors: []
    };

    intro2: Course = {
        id: "csc1302",
        name: "Principles of Computer Science II",
        description: "An introduction to the discipline of computer science. Computer programming is the primary focus of the course, with secondary focus on a breadth of computer science topics. These topics include algorithmic foundations, hardware concepts, virtual machine concepts, software systems, applications, and social issues.",
        tutors: []
    }
}