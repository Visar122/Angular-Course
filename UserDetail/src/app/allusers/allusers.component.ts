import { Component,OnInit} from '@angular/core';
import { userService } from '../Services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit{

  constructor(private userservice:userService){}

  users: {name:string,job:string,gender:string,country:string,age:number,avatar:string}[]=[];

  ngOnInit(){
 this.users=this.userservice.users

  }
  ShowDetails(user:{name:string,job:string,gender:string,country:string,age:number,avatar:string}){
    this.userservice.ShowUserDetails(user); //when this  will be called it will show an event

  }

}
