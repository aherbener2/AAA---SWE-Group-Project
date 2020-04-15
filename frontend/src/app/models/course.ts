import { Tutor } from './tutor';

export class Course {
    id: string;
    name: string;
    description: string;
    tutors: Tutor[];

    constructor (id: string, name: string, description: string, tutors: Tutor[] ) {
        this.id= id;
        this.name= name;
        this.description= description;
        this.tutors= tutors;
    }
}