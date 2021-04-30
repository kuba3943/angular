import { AppComponent } from './../app.component';
import { Subject } from './../models/subject';
import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-class',
  templateUrl: './subject-class.component.html',
  styleUrls: ['./subject-class.component.css']
})
export class SubjectClassComponent implements OnInit {



  subjects!: Array<Subject>;

  classId: any = this.route.snapshot.paramMap.get('id');


  constructor(private aC:AppComponent, private classService: ClassService, private route: ActivatedRoute,) { }

username!: string;

  ngOnInit(): void {
    this.showSubjects(this.route.snapshot.paramMap.get('id'));
    this.username = this.aC.username;
  }

  showSubjects(id:any): void {
    this.classService.getSubjects(id)
      .subscribe(
        data => {
          this.subjects = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
