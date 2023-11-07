import { Injectable } from '@angular/core';
import { Product } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }           //to call the api which is http://localhost:3000/products i need a http client
 
  addProduct(data:Product){  //Product is the interface 
    return this.http.post('http://localhost:3000/products ',data);
  }
  productList(){
    return this.http.get<Product[]>('http://localhost:3000/products'); //im defining it here
  }
}
