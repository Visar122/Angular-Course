import { Injectable } from '@angular/core';
import { Product } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }           //to call the api which is http://localhost:3000/products i need a http client
 
  addProduct(data:Product){  //Product is the interface , This adds products to the list
    return this.http.post('http://localhost:3000/products ',data);
  }

  productList(){ //this just shows the list of products
    return this.http.get<Product[]>('http://localhost:3000/products');//first i got a mistake because product in productlist is a type array and the product interface is an object so now i need to define it in the ProductList() im definding it here
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProductbyId(id:string){
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

 updateProduct(product:Product){
     return this.http.put<Product>(`http://localhost:3000/products/${product.id}`,product); //id we update a http we need to use put
 }

 PopularProducts(){
  return this.http.get<Product[]>('http://localhost:3000/products?_limit=4');
 }
 Trendyproducts(){
  return this.http.get<Product[]>('http://localhost:3000/products?_limit=10');
 }
 Searchprodcut(query:string){
  return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`);
 }
}
