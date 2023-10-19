import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

 userSignUp(data:signup){
  return this.http.post('http://localhost:3000/Seller',data);
 }
  
}
