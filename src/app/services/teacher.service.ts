import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Subject} from "../models/subject.model";
import { Task } from "../models/task.model";
import { User } from '../models/user.model';
import { AddTaskForm } from "../models/add-task-form.model";
import { AddSubjectForm } from "../models/add-subject-form.model";
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private teacherUrl = 'http://localhost:8080/security/teacher';
  private getTeacherSubjectsUrl = 'http://localhost:8080/teacher/subjects';
  constructor(private http: HttpClient) { }
  getTeacherPage(): Observable<string> {
    return this.http.get(this.teacherUrl, { responseType: 'text' });
  }

  getTeacherSubjectsPage(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.getTeacherSubjectsUrl);
  }
  getSubjectById(subjectId: number): Observable<Subject> {
    const url = `${this.getTeacherSubjectsUrl}/${subjectId}`;
    return this.http.get<Subject>(url);
  }
  deleteTask(subjectId: number, taskId: number): Observable<any> {
    const url = `${this.getTeacherSubjectsUrl}/${subjectId}/${taskId}`;
    return this.http.delete(url);
  }
  getTaskById(subjectId: number, taskId: number): Observable<Task> {
    const url = `${this.getTeacherSubjectsUrl}/${subjectId}/tasks/${taskId}`;
    return this.http.get<Task>(url);
  }
  getEnrolledStudents(subjectId: number): Observable<User[]> {
    const url = `http://localhost:8080/teacher/students/${subjectId}`;
    return this.http.get<User[]>(url);
  }
  createTask(taskForm: AddTaskForm): Observable<any> {
    const url = `${this.getTeacherSubjectsUrl}/${taskForm.subjectId}`;
    return this.http.post(url, taskForm);
  }
  createSubject(addSubjectForm: AddSubjectForm): Observable<any> {
    return this.http.post(this.getTeacherSubjectsUrl, addSubjectForm);
  }

}
