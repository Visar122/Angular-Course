import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent  implements OnInit{
   
  productlist2: undefined | Product[]; //this is an array of product interface and  to use interface i must import it
   constructor(private product:ProductService){}
  ngOnInit(){

    this.product.productList().subscribe((result)=>{
    console.warn(result)
    if(result){
      this.productlist2=result;  //first i got a mistake because product in productlist is a type array and the product interface is an object so now i need to define it in the ProductList()
    
    }
    });
  }



}
