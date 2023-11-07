import { EventEmitter, Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Login, signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  isLogginError=new EventEmitter<boolean>(false)

  constructor(private http:HttpClient,private route:Router) { }

 userSignUp(data:signup){
  return this.http.post('http://localhost:3000/Seller',data,{observe:'response'}).subscribe((result)=>{  // this adds the login to http

console.warn(result);
if(result){

localStorage.setItem('seller',JSON.stringify(result.body))//The data you store in localStorage remains available even after the user closes the browser, as long as the data is not explicitly removed or cleared.
this.route.navigate(['seller-home'])           //'seller'is a label to call the data stored,JSON.stringify(result.body)) takes the body mot all the information
} 
})
 }
    //this makes it possible so the logged in user dosen't se the sign up field again
reloadSeller(){

  if(localStorage.getItem('seller')){//so if we have item in seller
      this.isSellerLoggedIn.next(true);
      this.route.navigate(['seller-home'])
  }
}
//is actually seller
SellerLogin(data:Login){
  console.warn(data);
  this.http.get(`http://localhost:3000/Seller?email=${data.email}&password=${data.password}`,
  {observe:'response'}).subscribe((result:any)=>{ 
    //console.warn(result) to check the body 
    if(result&&result.body&&result.body.length ===1){
      this.isLogginError.emit(false)
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.route.navigate(['seller-home'])

    }
    else{
      console.warn('login failed')
      this.isLogginError.emit(true)
    }

  })
}
  }
