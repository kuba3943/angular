import { ClassService } from './../services/class.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../models/class';

@Component({
  selector: 'app-add-student-to-class',
  templateUrl: './add-student-to-class.component.html',
  styleUrls: ['./add-student-to-class.component.css']
})
export class AddStudentToClassComponent implements OnInit {

  constructor(private studentService: StudentService, private route: ActivatedRoute, private authService: AuthenticationService, private classService: ClassService) { }

  students: Array<Student> = [];

  student: Student = new Student;
  class: Class = new Class;

  classId: any = this.route.snapshot.paramMap.get('classId');


  showStudents(): void {
    this.studentService.getStudentsWithNoClass()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  ngOnInit(): void {
    this.showStudents();
    this.getClass(this.route.snapshot.paramMap.get('classId'))
  }

  addToClass(classId: any, studentId: any){
    this.classService.addStudentToClass(classId, studentId).subscribe(data => {});
  }

  getClass(classId: any){
    this.classService.getClass(classId).subscribe(data=> { this.class = data})
  }







}
