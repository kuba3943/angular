import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './login/http-interceptor.service';
import { MenuComponent } from './menu/menu.component';
import { TestComponent } from './test/test.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { StudentClassComponent } from './student-class/student-class.component';
import { AddStudentToClassComponent } from './add-student-to-class/add-student-to-class.component';
import { SubjectClassComponent } from './subject-class/subject-class.component';
import { AddSubjectToClassComponent } from './add-subject-to-class/add-subject-to-class.component';
import { ShowGradesComponent } from './show-grades/show-grades.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    TestComponent,
    StudentlistComponent,
    StudentdetailsComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    StudentGradesComponent,
    ClasslistComponent,
    StudentClassComponent,
    AddStudentToClassComponent,
    SubjectClassComponent,
    AddSubjectToClassComponent,
    ShowGradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MenuComponent,
    StudentlistComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
