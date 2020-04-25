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

    sam: Tutor = {
        pantherId: "217990056",
        firstName: "Sam",
        lastName: "Jenkins",
        email: "sjenkins895@student.gsu.edu",
        password: "heyPaul",
        schedule: [
            {
                day: "Monday",
                time: "9am - 12pm" 
            },
            {
                day: "Tuesday",
                time: "11am-3pm"
            },
            {
                day: "Thursay",
                time: "2pm-5pm"
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
    };

    theoretics: Course = {
        id: "csc2510",
        name: "Theoretical Foundations of Computer Science",
        description: "This course covers the basic theoretical foundations required to study various sub-disciplines in computer science. Topics include: propositional and predicate logic with applications to logic programming, database querying, and program verification; induction and its application in proving correctness and termination of programs; recurrence relations, combinatorics, and graph theory with applications to analysis of algorithms; sets, relations, and functions and their applications in databases, functional programming, and automata.",
        tutors: []
    };

    compOrg: Course = {
        id: "csc3210",
        name: "Computer Organization and Programming",
        description: "Computer structure and machine language, addressing techniques, macros, file I/O, program segmentation, and linkage.",
        tutors: []
    };

    syslevel: Course = {
        id: "csc3320",
        name: "System-Level Programming",
        description: "An introduction to programming at the level of the operating system. Topics include editors, system calls, programming tools, files, processes, interprocess communication, and shells.",
        tutors: []
    };

    dataStruct: Course = {
        id: "csc2720",
        name: "Data Structures",
        description: "Basic concepts and analysis of data representation and associated algorithms, including linearly-linked lists, multi-linked structures, trees, searching, and sorting. Serves as one of the two Critical Thinking Through Writing (CTW) courses required of all computer science majors.",
        tutors: []
    };

    algorithms: Course = {
        id: "csc4520",
        name: "Design and Analysis of Algorithms",
        description: "Techniques for designing efficient algorithms; analysis of algorithms; lower bound arguments; algorithms for sorting, selection, graphs, and string matching.",
        tutors: []
    };
}