import { AppComponent } from './../app.component';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private aC:AppComponent, private studentService: StudentService) { }


  username!:string;




  ngOnInit(): void {
    this.username = this.aC.username;
  }

student: Student = new Student;
  submitted = false;



  saveTutorial(): void {
    const data = {
      id: this.student.id,
      dob: this.student.dob,
      username: this.student.username,
      grades: this.student.grades,
      password: this.student.password,
      surname: this.student.surname,
      userRole: this.student.userRole,
      name: this.student.name
    };

    this.studentService.add(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.student = new Student;
  }


}
