import { User } from './user.model';
import {Grade} from "./grade.model";
export class Task {
  id?: number;
  name: string;
  description: string;
  deadline: Date;
  subjectId: number;
  studentGrades: Grade[]

  constructor(name: string, description: string, deadline: Date, subjectId: number, studentGrades: Grade[]) {
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.subjectId = subjectId;
    this.studentGrades = studentGrades;
  }

}
