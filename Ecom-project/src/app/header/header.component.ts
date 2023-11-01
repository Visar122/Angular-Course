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

   constructor(private route:Router){}
  search=false;
 
ngOnInit(){

this.route.events.subscribe((value:any)=>{
  console.warn(value)
  if(value.url){
    console.warn(value.url); //this hsows just home or sellerauth route in console

    if(localStorage.getItem('seller')&&value.url.includes('seller')){
    console.warn('this is seller area'); 
  this.menuType="seller";
  }
  else{
      this.menuType="Default";
  }

}});

}
  searched(){
    return this.search=true;
  }

  
  youSearched(InputEl:HTMLInputElement){
     return ('You searched : "'+InputEl.value+"'" );
  }

 


}
