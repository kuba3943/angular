import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-show-grades',
  templateUrl: './show-grades.component.html',
  styleUrls: ['./show-grades.component.css']
})
export class ShowGradesComponent implements OnInit {

  constructor(private classService: ClassService, private route: ActivatedRoute,) { }


  students!: Array<Student>;


classId: any = this.route.snapshot.paramMap.get('classId');


  ngOnInit(): void {
    this.showStudents(this.route.snapshot.paramMap.get('classId'));
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
