import { Component, OnInit } from '@angular/core';
import { Team } from '../Services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{
  constructor(private team:Team,private route:Router){

  }
   TheTeam:{name:string;profession:string,Email:string,image:string,description:string;}[]=[]
  ngOnInit(){

    this.TheTeam=this.team.Team;

  }
  navigateToHome(){
  //this.route.navigate(['Home']);
  this.route.navigateByUrl('Home');
  }

}
