import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Ecom-project';

  menuType='default';
  sellerName='';

   constructor(private route:Router){}
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


}
