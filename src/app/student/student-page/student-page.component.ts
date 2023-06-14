import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  subjects: any[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.studentService.getAllSubjects().subscribe(
      (data: any[]) => {
        this.subjects = data;
      }
    );
  }

  enroll(subjectId: number) {
    this.studentService.enrollSubject(subjectId).subscribe(
      () => {
        this.loadSubjects(); // Refresh the subject list after successful enrollment
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
