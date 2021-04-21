import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  student: Student = new Student;



  ngOnInit(): void {
    this.getstudent(this.route.snapshot.paramMap.get('id'));
  }

  getstudent(id: any) {
    this.studentService.get(id).subscribe(data => {console.log(data); this.student = data; this.student.password = ''})
    ;}



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

    this.studentService.update(data)
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
