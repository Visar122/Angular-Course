import { Component, Injectable, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Login, signup } from '../data-type';

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
  authError:string='';
 

  constructor(private seller:SellerService){} 
 ngOnInit(){
   this.seller.reloadSeller(); //this uses the method so  if the user is logged in  he dosent se the sign up field  
 }

 
  sign(data:signup){//signup is an object form data-type.ts

    this.seller.userSignUp(data);
    
    
    

  }  
  login(data:Login){
   
    this.seller.SellerLogin(data);

    this.seller.isLogginError.subscribe((isError)=>{

      console.warn(isError)

      if(isError){
        this.authError='Email or password is not correct'

      }
    })
  }
  openLogin(){
    this.showLogin=true;
  }

  openSignup(){
    this.showLogin=false;

  }
  
}

