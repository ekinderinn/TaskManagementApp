import {Subject} from "./subject.model";

export class User {
  id?: number;
  email: string;
  subjects: Subject[];

  constructor(email: string, subjects: Subject[]) {
    this.email = email;
    this.subjects = subjects;
  }

}
