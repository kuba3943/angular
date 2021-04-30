import { AuthenticationService } from './../login/authentication.service';
import { StudentdetailsComponent } from './../studentdetails/studentdetails.component';
import { StudentService } from './../services/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService, private authService: AuthenticationService) { }

  students: Array<Student> = [];

  student: Student = new Student;

  username = this.route.snapshot.paramMap.get('username');

  role = this.route.snapshot.paramMap.get('role')

  showStudents(): void {
    this.studentService.getAll()
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  getstudent(id: number) {
    this.studentService.get(id).subscribe(data => {console.log(data); this.student = data;});}

  deleteStudent(student: Student){
    this.studentService.delete(student.id).subscribe(data => {console.log(data)});
    this.remove(student);
  }

  remove(student: Student) {
    const list = this.students.filter(e => e !== student);
    this.students = list;
  }


  ngOnInit(): void {
    this.showStudents();
  }

}
