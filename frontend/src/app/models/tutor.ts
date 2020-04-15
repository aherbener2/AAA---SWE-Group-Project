import { Schedule } from './schedule';

export class Tutor {
    pantherId: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    schedule: Schedule[];

    constructor (pantherId: string, firstName: string, lastName: string, email: string, password:string, schedule:Schedule[]) {
        this.pantherId= pantherId;
        this.firstName= firstName;
        this.lastName= lastName;
        this.email= email;
        this.password= password;
        this.schedule = schedule;
    }
}