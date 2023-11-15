import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Ecom-project';

  menuType='default';
  sellerName='';

  searchResult:undefined|Product[];

   constructor(private route:Router,private product:ProductService){}
  search=false;
 
ngOnInit(){

this.route.events.subscribe((value:any)=>{
  console.warn(value)
  if(value.url){
  
    if(localStorage.getItem('seller')&&value.url.includes('seller')){
    console.warn('this is seller area'); 

    // So user name shows up 
    
    let sellerStore=localStorage.getItem('seller');
    let sellerData=sellerStore&&JSON.parse(sellerStore)[0]; //sellerstore mean if it is not empty we can do that,and [0]  because seller is an array
    this.sellerName=sellerData.name;
  this.menuType="seller";
  }
  else{
      this.menuType="Default";
  }
  console.log('menuType:', this.menuType); 
}});

}



  searched(){
    return this.search=true;
  }

  
  youSearched(InputEl:HTMLInputElement){
     return ('You searched : "'+InputEl.value+"'" );
  }

 logout(){
  localStorage.removeItem('seller');
  this.route.navigate(['home']);

 }

 Searchproduct(query:KeyboardEvent){
  if(query){//if query is not null
    const element=query.target as HTMLInputElement;
    console.warn(element.value);
    this.product.Searchprodcut(element.value).subscribe((result)=>{
      this.searchResult=result;
        if(result.length>5){ //so ther is not more than 5 products 
          result.length=length;
        }
   

    })
  } 
 }
 hideSearch(){
  this.searchResult=undefined;
}
}
