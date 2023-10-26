import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient,private route:Router) { }

 userSignUp(data:signup){
  return this.http.post('http://localhost:3000/Seller',data,{observe:'response'}).subscribe((result)=>{  // this adds it to http

console.warn(result);
if(result){

localStorage.setItem('seller',JSON.stringify(result.body))//The data you store in localStorage remains available even after the user closes the browser, as long as the data is not explicitly removed or cleared.
this.route.navigate(['seller-home'])           //'seller'is a label to call the data stored,JSON.stringify(result.body)) takes the body mot all the information
} 
})
 }
 reloadSeller(){                               //this makes it possible so the logged in user dosen't se the sign up field again
  if(localStorage.getItem('seller')){
    this.isSellerLoggedIn.next(true)
    this.route.navigate(['seller-home'])
  }
 }
  
}
