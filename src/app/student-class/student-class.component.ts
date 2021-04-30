import { AppComponent } from './../app.component';
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

  constructor(private aC: AppComponent, private classService: ClassService, private route: ActivatedRoute,) { }

  username!:string;

  students!: Array<Student>;

classId: any = this.route.snapshot.paramMap.get('id');


  ngOnInit(): void {
    this.showStudents(this.route.snapshot.paramMap.get('id'));
    this.username = this.aC.username;
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
