import { Student } from './../models/student';
import { MenuComponent } from './../menu/menu.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  student!: Student;

  constructor(private menu: MenuComponent) {

   }

  ngOnInit(): void {
    this.menu.abc().subscribe(s => {
      this.student = s;
    })
  }

}
