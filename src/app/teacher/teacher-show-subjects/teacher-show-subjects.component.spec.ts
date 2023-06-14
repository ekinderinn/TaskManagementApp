import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherShowSubjectsComponent } from './teacher-show-subjects.component';

describe('TeacherShowSubjectsComponent', () => {
  let component: TeacherShowSubjectsComponent;
  let fixture: ComponentFixture<TeacherShowSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherShowSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherShowSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
