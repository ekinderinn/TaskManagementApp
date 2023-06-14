import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from "../../services/teacher.service";
import { Subject } from "../../models/subject.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.css']
})
export class SubjectPageComponent implements OnInit {
  subject?: Subject;

  constructor(private route: ActivatedRoute, private teacherService: TeacherService,private router: Router) { }

  ngOnInit() {
    const subjectId = Number(this.route.snapshot.paramMap.get('subjectId'));
    this.teacherService.getSubjectById(subjectId).subscribe(
      (subject) => {
        console.log(subject);
        this.subject = subject;
      }
    );
  }
  deleteTask(subjectId?: number, taskId?: number) {
    if (subjectId && taskId) {
      this.teacherService.deleteTask(subjectId, taskId).subscribe(
        data => {
          console.log(data);
          window.location.reload();
        }
      );
    }
  }

  viewTask(subjectId?: number, taskId?: number) {
    if (subjectId && taskId) {
      this.router.navigate(['teacher/subjects', subjectId, 'tasks', taskId]);
    }
  }
  addTask(subjectId?: number) {
    if (subjectId) {
      this.router.navigate(['teacher/subjects', subjectId, 'add-task']);
    }
  }
}
