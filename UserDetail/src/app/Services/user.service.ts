import { EventEmitter } from "@angular/core"

export class userService{
    users=[
        {name:'John',job:'Teacher',gender:'Male',country:'United States',age:35,avatar:'/assets/teacher.jpg'},
        {name:'Mark',job:'Designer',gender:'Male',country:'Germany',age:25, avatar:'/assets/designer.jpg'},
        {name:'Tom',job:'Lawyer',gender:'Male',country:' Ireland',age:35,avatar:'/assets/teacher.jpg'},
        {name:'Steve',job:'Doctor',gender:'Male',country:' India',age:25,avatar:'/assets/doctor.jpg'}
        
    ]

    OnShowDetailsClicked= new EventEmitter<{name:string,job:string,gender:string,country:string,age:number,avatar:string}> ();      //Im making an event and the event type is object

    ShowUserDetails(user:{name:string,job:string,gender:string,country:string,age:number,avatar:string}){   //we make a method which will raise this event 
        this.OnShowDetailsClicked.emit(user);

    }
}