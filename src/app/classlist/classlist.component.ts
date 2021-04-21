import { ClassService } from './../services/class.service';
import { Component, OnInit } from '@angular/core';
import { Class } from '../models/class';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  constructor(private classService: ClassService) { }

  classes: Array<Class> = [];


  showClasses(): void {
    this.classService.getAll()
      .subscribe(
        data => {
          this.classes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    this.showClasses();
  }

}
