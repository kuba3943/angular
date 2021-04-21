import { AuthenticationService } from './login/authentication.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private authService: AuthenticationService, ){

  }

  isLoggedIn = false;

  ngOnInit(): void {

  }

  @HostListener("click", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    this.getUsername();
}


  username!: string;

title: string = 'Angular';

getUsername(){
  this.username = this.authService.getLoggedInUserName();
}

handleLogout() {
  this.authService.logout();

}
}



