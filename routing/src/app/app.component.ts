import { Component, OnInit } from '@angular/core';
import { Course } from './Services/course service';
import { Team } from './Services/team.service';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Course,Team]
})
export class AppComponent implements OnInit{
  title = 'Routing';
  displayloadingIndicator=false;

  
  constructor(private course:Course, private team:Team,private activatedRoute:ActivatedRoute,private authService:AuthService,private router:Router){
    
  }
  ngOnInit(){ 
  this.router.events.subscribe((routerEvent:Event)=>{  //nedd to import the event  up up in router
  
    if(routerEvent instanceof NavigationStart){
      this.displayloadingIndicator=true;
    }
    if(routerEvent instanceof NavigationEnd||routerEvent instanceof NavigationCancel|| routerEvent instanceof NavigationError){
      this.displayloadingIndicator=false;
    }

  })    
  }
  
  
  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
}
