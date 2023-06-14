import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { httpInterceptorProviders } from "./auth/auth-interceptor";
import { authGuard } from "./guards/auth.guard";
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { StudentPageComponent } from './student/student-page/student-page.component';
import { TeacherShowSubjectsComponent } from './teacher/teacher-show-subjects/teacher-show-subjects.component';
import { SubjectPageComponent } from './teacher/subject-page/subject-page.component';
import { TaskPageComponent } from './teacher/task-page/task-page.component';
import { AddTaskFormComponent } from './teacher/add-task-form/add-task-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentPageComponent, canActivate: [authGuard], data: { roles: ['ROLE_STUDENT'] } },
  { path: 'teacher', component: TeacherComponent, canActivate: [authGuard], data: { roles: ['ROLE_TEACHER'] } },
  { path: 'teacher/subjects', component: TeacherShowSubjectsComponent, canActivate: [authGuard], data: { roles: ['ROLE_TEACHER'] } },
  { path: 'teacher/subjects/:subjectId', component: SubjectPageComponent },
  { path: 'teacher/subjects/:subjectId/add-task', component: AddTaskFormComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'teacher/subjects/:subjectId/tasks/:taskId', component: TaskPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TeacherComponent,
    StudentPageComponent,
    TeacherShowSubjectsComponent,
    SubjectPageComponent,
    TaskPageComponent,
    AddTaskFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
