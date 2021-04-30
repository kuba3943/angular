import { AppComponent } from './../app.component';
import { ClassService } from './../services/class.service';
import { Component, OnInit } from '@angular/core';
import { Class } from '../models/class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, private classService: ClassService) { }

  classes: Array<Class> = [];

  username = this.route.snapshot.paramMap.get('username');

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
