import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../../services/teacher.service";
import {Subject} from "../../models/subject.model";
import { Router } from '@angular/router';
import { AddSubjectForm } from "../../models/add-subject-form.model";

@Component({
  selector: 'app-teacher-show-subjects',
  templateUrl: './teacher-show-subjects.component.html',
  styleUrls: ['./teacher-show-subjects.component.css']
})
export class TeacherShowSubjectsComponent implements OnInit{
  subjects?: Subject[];
  newSubjectForm: AddSubjectForm = new AddSubjectForm('');
  constructor(private teacherService: TeacherService, private router: Router)  {
  }

  ngOnInit() {
    this.loadTeacherSubjects();
  }

  loadTeacherSubjects() {
    this.teacherService.getTeacherSubjectsPage().subscribe(
      (subjects) => {
        console.log(subjects);
        this.subjects = subjects;
      }
    );
  }
  createSubject() {
    this.teacherService.createSubject(this.newSubjectForm).subscribe(
      (response) => {
        console.log(response);
        window.location.reload();
      }
    );
  }

  viewSubject(subjectId?: number) {
    if(subjectId) {
      this.router.navigate(['teacher/subjects', subjectId]);
    }
  }

}
