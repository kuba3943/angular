import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grades } from '../models/grades';
import { Point } from '../models/point';
import { Student } from '../models/student';
import { ClassService } from '../services/class.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-show-grades',
  templateUrl: './show-grades.component.html',
  styleUrls: ['./show-grades.component.css']
})
export class ShowGradesComponent implements OnInit {


  constructor(private studentService: StudentService, private classService: ClassService, private route: ActivatedRoute,) { }


  students!: Array<Student>;


classId: any = this.route.snapshot.paramMap.get('classId');
subjectId: any = this.route.snapshot.paramMap.get('subjectId');

avgValue!: any;

grades!: Grades;

id: any;

  a: number = 1;

points2: Array<Point> = [];

point:Point = new Point;



  ngOnInit(): void {
    this.showStudents(this.route.snapshot.paramMap.get('classId'));
    this.getPoints();
  }

  getPoints(){
    this.studentService.getPoints().subscribe(data => {console.log(data); this.points2 = data});
  }

  addPoint(studentId:any, subjectId:any, pointId:any){
    this.studentService.addPointToStudent(studentId, subjectId, pointId).subscribe(data => {console.log(data); });
    this.point = new Point;
  }

  studentID(studentid: any){

    this.id = studentid*this.a;
    this.a = this.a* (-1);
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

  getGrades(studentId:any, subjectId:any){
    this.studentService.getGrades(studentId,subjectId).subscribe(data => {this.grades = data;  this.avg(data)});

  }


  avg(grades:Grades){

    if (grades.points === null){
      this.avgValue = 0;
    } else {
    const sum = this.grades.points.reduce((a, b) => a + b.point, 0);
    const avg = (sum / this.grades.points.length) || 0;

    this.avgValue = avg; }
  }




}
