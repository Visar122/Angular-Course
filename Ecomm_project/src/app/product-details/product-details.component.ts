import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

   productData:undefined|Product;
   productQuantity:number=1;
  constructor(private activeRoute:ActivatedRoute ,private product:ProductService) {}

  ngOnInit(): void {
     //this is so i get the id in console
    let productId=this.activeRoute.snapshot.paramMap.get('ProductId');// because {path:"details/:ProductId" 
    console.warn(productId)
    //we use the old getproductbyId method which gets products by id

    productId && this.product.getProductbyId(productId).subscribe((data)=>{
       this.productData=data;
       console.warn(data)

    })
  }


  handleQuantity(val:string){


    if(this.productQuantity<10 && val==='plus'){
      this.productQuantity+=1; //increasing it by 1

    }else if(this.productQuantity >1 && val==='min'){
      this.productQuantity-=1
    }

  }
}
