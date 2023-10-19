import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,LoggerService] //can also put Loggerservice in app modules and it will work

})
export class AppComponent {
  title = 'UserService';
                                     
  user:{name:string,status:string}[]=[];
  constructor(private userService:UserService,loggerService:LoggerService){
   
  }
  ngOnInit(){
    this.user=this.userService.users;
   
  }
    
}

