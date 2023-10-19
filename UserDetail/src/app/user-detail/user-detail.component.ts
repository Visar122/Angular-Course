import { Component, OnInit } from '@angular/core';
import { userService } from '../Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  implements OnInit{

constructor(private userservice:userService){ }

  user!: { name: string; job: string; gender: string; country: string; age: number; avatar: string; };  //this is not an array its a single user

ngOnInit(): void {
    this.userservice.OnShowDetailsClicked.subscribe((data: {name:string,job:string,gender:string,country:string,age:number,avatar:string})=>{
      this.user = data;
    });
  
}
}
