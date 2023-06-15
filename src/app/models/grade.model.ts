import {Task} from "./task.model";
import {User} from "./user.model";

export class Grade {
  id?: number;
  email: string;
  value: number;

  constructor(email: string, value: number) {
    this.email = email;
    this.value = value;
  }

}
