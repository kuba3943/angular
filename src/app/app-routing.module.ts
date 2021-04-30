import { ShowGradesComponent } from './show-grades/show-grades.component';
import { AddSubjectToClassComponent } from './add-subject-to-class/add-subject-to-class.component';
import { AddStudentToClassComponent } from './add-student-to-class/add-student-to-class.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { SubjectClassComponent } from './subject-class/subject-class.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'menu/:username', component:MenuComponent},
  {path: 'student/:role/:username', component:StudentlistComponent},
  {path: 'studentDetails/:id/:role/:username', component:StudentdetailsComponent},
  {path: 'add', component:AddStudentComponent},
  {path: 'update/:id', component:UpdateStudentComponent},
  {path: 'classes/:username', component:ClasslistComponent},
  {path: 'studentClass/:id', component:StudentClassComponent},
  {path: 'addToClass/:classId', component:AddStudentToClassComponent},
  {path: 'subjectClass/:id', component:SubjectClassComponent},
  {path: 'addSubjectToClass/:classId', component:AddSubjectToClassComponent},
  {path: 'showGrades/:subjectId/:classId', component:ShowGradesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
