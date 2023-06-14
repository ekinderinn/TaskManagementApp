import {User} from "./user.model";
import {Task} from "./task.model";

export class Subject {
  id?: number;
  name: string;
  teacherId: number;
  students: User[];
  tasks: Task[];

  constructor(name: string, teacherId: number, students: User[], tasks: Task[]) {
    this.name = name;
    this.teacherId = teacherId;
    this.students = students;
    this.tasks = tasks;

  }


}
