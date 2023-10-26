import { Component, Injectable, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signup } from '../data-type';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  constructor(private seller:SellerService){}
 ngOnInit(){
  this.seller.reloadSeller();
 }

 
  sign(data:signup){//signup is an object form data-type.ts

    this.seller.userSignUp(data);
    
    
    

  }  
  
}

