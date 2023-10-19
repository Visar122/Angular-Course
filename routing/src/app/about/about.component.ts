import { Component, OnInit } from '@angular/core';
import { Team } from '../team.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{
  constructor(private team:Team){

  }
   TheTeam:{name:string;profession:string,Email:string,image:string,description:string;}[]=[]
  ngOnInit(){

    this.TheTeam=this.team.Team;

  }

}
