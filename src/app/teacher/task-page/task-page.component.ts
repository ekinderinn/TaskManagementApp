import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from "../../services/teacher.service";
import { Task } from "../../models/task.model";
import { User } from "../../models/user.model";
import { Router } from '@angular/router';
import {Grade} from "../../models/grade.model";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  task?: Task;
  enrolledStudents: User[] = [];

  constructor(private route: ActivatedRoute, private teacherService: TeacherService, private router: Router) { }

  ngOnInit() {
    const subjectId = Number(this.route.snapshot.paramMap.get('subjectId'));
    const taskId = Number(this.route.snapshot.paramMap.get('taskId'));
    this.teacherService.getTaskById(subjectId, taskId).subscribe(
      (task) => {
        console.log(task);
        this.task = task;
        console.log("grades");
        console.log(this.task.studentGrades);
        this.fetchEnrolledStudents(task.subjectId);
      }
    );
  }

  fetchEnrolledStudents(subjectId: number) {
    this.teacherService.getEnrolledStudents(subjectId).subscribe(
      (students) => {
        console.log(students);
        this.enrolledStudents = students;
      }
    );
  }


  giveGrade(grade: string, gradeId?: number) {
    const subjectId = Number(this.route.snapshot.paramMap.get('subjectId'));
    const taskId = Number(this.route.snapshot.paramMap.get('taskId'));
    if (gradeId) {
      this.teacherService.giveGrade(subjectId, taskId, gradeId, grade).subscribe(
        (data) => {
          console.log(data);
          window.location.reload();
        }
      );
    }
  }



}
