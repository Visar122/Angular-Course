import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
  productData:undefined|Product;
  message:undefined|string;
constructor(private route:ActivatedRoute,private product:ProductService){}

ngOnInit(){
  let ProductId=this.route.snapshot.paramMap.get('id');
  console.warn(ProductId);
  ProductId && this.product.getProductbyId(ProductId).subscribe((data)=>{ //ProductId &&  means if productid is not null or undifined
    console.warn(data)
    this.productData=data;
  });
}
  submit(data:any){

   if(this.productData){
    data.id=this.productData.id; //this is so  i get the id aswell with th update
   }
     this.product.updateProduct(data).subscribe((result)=>{
  if(result){
     this.message='Product is updated'
  }
     })
     setTimeout(()=>{
      this.message=undefined;
     },3000);
   console.warn(data);
  }
}
