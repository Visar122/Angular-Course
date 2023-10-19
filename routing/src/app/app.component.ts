import { Component, OnInit } from '@angular/core';
import { Course } from './Services/course service';
import { Team } from './Services/team.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Course,Team]
})
export class AppComponent implements OnInit{
  title = 'Routing';

  
  constructor(private course:Course, private team:Team,private activatedRoute:ActivatedRoute,private authService:AuthService){
    
  }
  ngOnInit(){ 
  
  }
  
  
  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
}
