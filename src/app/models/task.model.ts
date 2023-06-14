import { User } from './user.model';
export class Task {
  id?: number;
  name: string;
  description: string;
  deadline: Date;
  subjectId: number;
  studentGrades: { [key: number]: number };
  students: User[];
  constructor(name: string, description: string, deadline: Date, subjectId: number, studentGrades: { [p: number]: number }, students: User[]) {
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.subjectId = subjectId;
    this.studentGrades = studentGrades;
    this.students = students;
  }
}
