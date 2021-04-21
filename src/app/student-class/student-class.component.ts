import { ClassService } from './../services/class.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.css']
})
export class StudentClassComponent implements OnInit {

  constructor(private classService: ClassService, private route: ActivatedRoute,) { }


  students!: Array<Student>;

classId: any = this.route.snapshot.paramMap.get('id');


  ngOnInit(): void {
    this.showStudents(this.route.snapshot.paramMap.get('id'));
  }


  showStudents(id:any): void {
    this.classService.getStudents(id)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
