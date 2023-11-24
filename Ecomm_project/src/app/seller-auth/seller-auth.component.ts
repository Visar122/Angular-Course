import { Component, Injectable, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Login, signup } from '../data-type';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  showLogin=false;
  SignUpError:string='';
  LoginError:string='';
  SignUpEmptyError:string='';
  LoginEmptyError:string='';
  signUpcharacterError:string='';
  logincharacterError:string='';

  constructor(private seller:SellerService,private route:Router){} 
 ngOnInit(){
   this.seller.reloadSeller(); //this uses the method so  if the user is logged in  he dosent se the sign up field  
 }

   
  sign(data:signup){//signup is an object form data-type.ts
     console.warn(data)
      // Empty  restriction
     if(!data.name||!data.email||!data.password){
       // Display an error message or handle the empty fields as needed
      this.SignUpEmptyError='Please fill in all required fields'
      
      setTimeout(()=>{
      this.SignUpEmptyError='';
       } ,3000);
       return; // Stop the execution if any field is empty
          
      }
    // Check if the password meets the minimum length requirement
      if (data.password.length < 8) {
      this.signUpcharacterError = 'Password must be at least 8 characters long';

      setTimeout(() => {
     this.signUpcharacterError = '';
     }, 3000);

     return; // Stop the execution if the password is too short
    }


    this.seller.userSignUp(data);
    
      
    this.seller.isSignUpError.subscribe((isError)=>{
      
      if(isError){
        this.SignUpError = 'Seller Already exists';
        // Set a timeout to clear the authError after 3 seconds
        setTimeout(() => {
          this.SignUpError = '';
        }, 3000);
          // Stop the execution if there's a signup error
      return;
      }
    
    })
    
    

  }  
  login(data:Login){
 // Empty  restriction
    if(!data.email||!data.password){
      // Display an error message or handle the empty fields as needed
   
     
     setTimeout(()=>{
         this.LoginEmptyError='Please fill in all required fields'
     },3000);
     return; // Stop the execution if any field is empty
     
   }
  
   if (data.password.length < 8) {
    this.logincharacterError = 'Password must be at least 8 characters long';

    setTimeout(() => {
   this.logincharacterError = '';
   }, 3000);
   return; // Stop the execution if the password is too short
  }
  
    this.seller.SellerLogin(data);
    

    this.seller.isLogginError.subscribe((isError)=>{

      if(isError){
        this.LoginError = 'Email Or password is Incorrect';
        // Set a timeout to clear the authError after 3 seconds
        setTimeout(() => {
          this.SignUpError = '';
        }, 3000);
           
      
      }
    });
  }
  openLogin(){
    this.showLogin=true;
  }

  openSignup(){
    this.showLogin=false;

  }
  
}

