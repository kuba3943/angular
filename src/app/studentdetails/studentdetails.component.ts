import { Point } from './../models/point';
import { Subject } from './../models/subject';
import { StudentlistComponent } from './../studentlist/studentlist.component';
import { StudentService } from './../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ActivatedRoute } from '@angular/router';
import { Grades } from '../models/grades';


@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor(private studentService: StudentService,    private route: ActivatedRoute,) { }


  student: Student = new Student;


flag: boolean = false;

id: any;
flag2: boolean = false;

avgValue!: any;
subjects: Array<Subject> = [];
grades!: Grades;

points2: Array<Point> = [];

point:Point = new Point;




  showSubjects(id:any): void {
    this.studentService.getSubjects(id)
      .subscribe(
        data => {
          this.subjects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    this.getstudent(this.route.snapshot.paramMap.get('id'));
    this.showSubjects(this.route.snapshot.paramMap.get('id'));
    this.getPoints();
  }

  getstudent(id: any) {
    this.studentService.get(id).subscribe(data => {console.log(data); this.student = data;});}




  getGrades(studentId:any, subjectId:any){
    this.studentService.getGrades(studentId,subjectId).subscribe(data => {this.grades = data;  this.avg(data)});

  }


  getPoints(){
    this.studentService.getPoints().subscribe(data => {console.log(data); this.points2 = data});
  }


  addPoint(studentId:any, subjectId:any, pointId:any){
    this.studentService.addPointToStudent(studentId, subjectId, pointId).subscribe(data => {console.log(data); this.student = data});
    this.point = new Point;
  }

  avg(grades:Grades){

    if (grades.points === null){
      this.avgValue = 0;
    } else {
    const sum = this.grades.points.reduce((a, b) => a + b.point, 0);
    const avg = (sum / this.grades.points.length) || 0;

    this.avgValue = avg; }
  }

  show(){


    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  show2() {


    if (this.flag2) {
      this.flag2 = false;
    } else {
      this.flag2 = true;
    }

  }


  subjectID(subjectid:any){
    this.id = subjectid;
  }

}


