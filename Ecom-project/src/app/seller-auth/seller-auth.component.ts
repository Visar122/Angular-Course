import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { signup } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  constructor(private seller:SellerService,private route:Router){}
 ngOnInit(){}

 
  sign(data:signup){
    console.warn(data);
    this.seller.userSignUp(data).subscribe((result)=>{
      if(result){
        this.route.navigate(['seller-home'])
      }
    })
    

  }  
  
}

