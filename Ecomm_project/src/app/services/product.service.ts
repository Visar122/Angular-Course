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
 Searchproduct(query:string){
  return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`);
 }
 Addtocart(data:Product){
   // Initialize an empty array to store cart data
  let cartData=[];
  let ourData=localStorage.getItem('localCart')  //this is to check if we have data inside local storage
  
  if(!ourData){ // // If there is no existing cart data, create a new array with the current product and store it in local storage
    localStorage.setItem('localCart',JSON.stringify([data])); 
  
  }

  else{  // If there is existing cart data, parse it from JSON and add the current product to the array
    cartData=JSON.parse(ourData); //this puts new data or the cartData to already one OurData object array
    cartData.push(data);
    localStorage.setItem('localCart',JSON.stringify([cartData])); //// Update the local storage with the updated cart data ,so now i can have multiple items
  }
   
    //localStorage.setItem is a method in JavaScript that belongs to the localStorage object. It allows you to store key-value pairs in a web browser's local storage. like we store user and seller
    // Json stringify Converts the object to a JSON string
 }
}
 