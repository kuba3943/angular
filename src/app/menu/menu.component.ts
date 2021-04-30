import { StudentService } from './../services/student.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../login/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private studentService: StudentService) {

     }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);


    this.getStudentByUsername(this.route.snapshot.paramMap.get('username'))
    this.getRole(this.route.snapshot.paramMap.get('username'));
  }

  role!: any;

  username = this.route.snapshot.paramMap.get('username');

  student!:Student;
  getStudentByUsername(username:any){

    this.studentService.getStudentByUsername(username).subscribe(data => {this.student = data});
  }

  getRole(username:any){
    this.studentService.getRole(username).subscribe(data => {this.role = data; console.log(data)});
  }

  handleLogout() {
    this.authenticationService.logout();
  }


  abc(): Observable<Student>{
   return this.http.get<Student>('http://localhost:8080/api/student/1');
  }

  goTo() {
    this.router.navigate(['student']);
  }

}
