import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  //providers:[UserService] dont need to do as it is a child component and inside the app component the list gettes applied 
})
export class AdduserComponent {

 username:string='';
 status:string='active';
 constructor(private userService:UserService){

 }


  AddUser(){
   
     this.userService.AddNewUser(this.username,this.status);  //we  implment the method that adds these user to the user array 
     console.log(this.userService.users); //We are adding  user to the user.service user array, just like in app.component.ts it adds a user but in  console
     
  }
}

