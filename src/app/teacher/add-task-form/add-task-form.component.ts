import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from "../../services/teacher.service";
import { AddTaskForm } from "../../models/add-task-form.model";

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  taskForm: AddTaskForm = new AddTaskForm();

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private router: Router
  ) { }

  onSubmit() {
    const subjectId = Number(this.route.snapshot.paramMap.get('subjectId'));
    this.taskForm.subjectId = subjectId;
    this.teacherService.createTask(this.taskForm).subscribe(
      () => {
        this.router.navigate(['teacher/subjects', subjectId]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  createTask() {
    this.teacherService.createTask(this.taskForm).subscribe(
      () => {
        console.log("Task created successfully!");
        // Optionally, you can navigate to the subject page or perform any other action here
      },
      (error) => {
        console.log("Error creating task:", error);
        // Handle error
      }
    );
  }
}
