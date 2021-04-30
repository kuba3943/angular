import { AppComponent } from './../app.component';
import { Grades } from './../models/grades';
import { Subject } from './../models/subject';
import { ClassService } from './../services/class.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../models/class';

@Component({
  selector: 'app-add-subject-to-class',
  templateUrl: './add-subject-to-class.component.html',
  styleUrls: ['./add-subject-to-class.component.css']
})
export class AddSubjectToClassComponent implements OnInit {

  constructor(private aC:AppComponent, private route: ActivatedRoute, private classService: ClassService) { }

  username!:string;



  classId: any = this.route.snapshot.paramMap.get('classId');

  subject: Subject = new Subject;
  submitted = false;

  grade!: Grades;
  ngOnInit(): void {
    this.username = this.aC.username;
  }

  saveTutorial(): void {
    const data = {
      id: this.subject.id,
      name: this.subject.name,
      grades: this.grade
    };

    this.classService.addSubjectToClass(this.classId, data)
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
    this.subject = new Subject;
  }

}
