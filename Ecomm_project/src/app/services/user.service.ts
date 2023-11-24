import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signup,Login } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isuserLoggedIn=new BehaviorSubject<boolean>(false);
  isLogginError=new EventEmitter<boolean>(false);
  isSignUpError=new EventEmitter<boolean>(false);

  constructor(private http:HttpClient,private route:Router) {   }
    
    UserSignUp(data:signup){ //the things get added in the console like name email passowrd automaticly by this method in the start

  // Check if the email already exists
    this.http.get(`http://localhost:3000/Users?email=${data.email}`,{ observe: 'response' }).subscribe((result: any) => {
        if (result && result.body && result.body.length > 0) {
          console.warn('Email already exists');
          // You may want to handle this case, show an error message, etc.
          this.isSignUpError.emit(true);
          return;

        } else {
      return this.http.post('http://localhost:3000/Users',data,{observe:'response'}).subscribe((result)=>{ //Here we post it in the interface
         console.warn(result);   //u can see the user is created

         if(result){
          localStorage.setItem('user',JSON.stringify(result.body))//The data you store in localStorage remains available even after the user closes the browser, as long as the data is not explicitly removed or cleared.
          this.route.navigate(['home']) ;  //'user'is a label to call the data stored,JSON.stringify(result.body)) takes only the  result  body so name password email not all the information
        }
      });
  }
});
}
  reloadUser(){                                             //this is so if user is logged in he cannot acess the login page again from the api
    if(localStorage.getItem('user')){
      this.isuserLoggedIn.next(true);
      this.route.navigate(['home']) ;
    }
  }

  UserLogin(data:Login){
 

    this.http.get(`http://localhost:3000/Users?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
 console.warn(result) //to check the body 
      if(result&&result.body&&result.body.length===1){
        this.isLogginError.emit(false);
        localStorage.setItem('user',JSON.stringify(result.body));
        this.route.navigate(['home']) ;

      }
      else{
        console.warn('login failed')
        this.isLogginError.emit(true);
      }
    })

  }
}
