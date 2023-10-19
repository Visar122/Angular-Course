import { Inject, Injectable } from "@angular/core"
import { LoggerService } from "./logger.service"
@Injectable()                                //we use this instead of @Component providers if we wanna take something from another service
export class UserService{

    constructor(private Logger:LoggerService){  //using this to take a method from logger.service 


    } 
    users=[
      
        {name:'John',status:'active'},
        {name:'Mark',status:'inactive'},
        {name:'Steve',status:'active'}
       
    ] 
    AddNewUser(name:string,status:string){
     
     
       this.users.push({name:name,status:status}) //the push adds new user to the array  ,, and the array will have object a anme which is name and an status which is the status we put
       this.Logger.LogMessage(name,status)
    }
}
