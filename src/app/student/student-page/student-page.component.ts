import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";
import { Router } from '@angular/router';
import {Subject} from "../../models/subject.model";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  subjects?: Subject[];
  mySubjects?: Subject[];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.loadSubjects();
    this.loadEnrolledSubjects();
  }

  loadSubjects() {
    this.studentService.getAllSubjects().subscribe(
      (data: any[]) => {
        this.subjects = data;
      }
    );
  }
  loadEnrolledSubjects() {
    this.studentService.getEnrolledSubjects().subscribe(
      (enrolled) => {
        this.mySubjects = enrolled;
        console.log(enrolled);
      }

    )
  }

  enroll(subjectId?: number) {
    if (subjectId) {
      this.studentService.enrollSubject(subjectId).subscribe(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }


  isEnrolled(subject?: Subject): boolean {
    if (!this.mySubjects || !subject) {
      return false;
    }

    return this.mySubjects.some((mySubject) => mySubject.id === subject.id);
  }
}
